import fs from 'fs';
import path from 'path';
import camelcase from 'camelcase';
import stripComments from 'strip-json-comments';

export interface ILess2JsOptions {
  stripPrefix?: boolean;
  camelCase?: boolean;
}

const importReg = /[@$]import+\s+['"].+['"]/g;
const varReg = /[@$].+:.+/g;

function readFile(file: string) {
  return fs.readFileSync(file, 'utf-8');
}

function parseFile(file: string): any {
  const dir = path.dirname(file);
  const data = readFile(file);
  const pure = stripComments(data);
  const matchedImports = pure.match(importReg);
  const matchedVars = pure.match(varReg);
  const result: { [key: string]: string } = {};

  while (matchedVars && matchedVars.length) {
    const matchedVar = matchedVars.shift()!;
    let [key, val] = matchedVar.split(':');
    key = key.replace(/\s/g, '');
    val = val.replace(/[\s;]/g, '');
    result[key] = val;
  }

  while (matchedImports && matchedImports.length) {
    const matchedImport = matchedImports.shift()!;
    // @import './other.less' => ./other.less
    const filePath = matchedImport.replace(/(@import\s+|['"\\]+|\s|\(.*\))/gi, '');
    // ./other.less => /User/**/@ordures/ui/es/**/other.less
    const absPath = path.resolve(dir, filePath);
    const temp = parseFile(absPath);
    Object.assign(result, temp);
  }

  return result;
}

/**
 * Parse variable which reference another
 *
 * eg.
 * =============
 *
 * // source
 * @width: 100px;
 * @card-width: @width;
 *
 * // result
 * @width: 100px;
 * @card-width: 100px;
 *
 * @params {Object} obj
 * @params {String} key
 */
function getRealVal(obj: { [x: string]: any }, k: string): any {
  const v = obj[k];
  if (/@.+/.test(v)) {
    return getRealVal(obj, v);
  }
  return v;
}

/**
 * Read variables from less file and export them as JavaScript vars.
 * @param {String} file - less file
 * @param {Object} options
 * @param {Bool} options.stripPrefix - Remove the `@` prefix from returned object keys
 * @param {Bool} options.camelCase - Convert dash/dot/underscore/space separated keys to camelCase
 */
export default (file: string, options: ILess2JsOptions = {}) => {
  const { stripPrefix = false, camelCase = false } = options;
  const data = parseFile(file);
  if (!data) {
    return null;
  }

  const keys = Object.keys(data);
  const map: { [key: string]: string } = {};
  keys.forEach((k) => {
    map[k] = getRealVal(data, k);
  });

  const result: { [key: string]: string } = {};
  keys.forEach((k) => {
    const v = map[k];
    let key = k;
    if (stripPrefix) key = k.replace(/[@$]/, '');
    if (camelCase) key = camelcase(k);
    result[key] = v;
  });

  return result;
};
