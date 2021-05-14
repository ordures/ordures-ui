import path from 'path';
import fs from 'fs';
import less2js from '@ordures/less2js';

export interface IOrduresOptions {
  rootPath?: string;
  configFile?: string;
}

export interface IOrduresConfigs {
  /**
   * 是否启用
   * 默认: true
   */
  enabled?: boolean;
  /**
   * theme 当前主题
   * 默认: default
   */
  theme?: string;
  /**
   * 引入目录
   * 默认: es
   */
  directory?: 'lib' | 'es';
  /**
   * 包含哪些模块[优先级比exclude高]
   * 默认: undefined
   */
  include?: string[] | undefined;
  /**
   * 去除哪些模块[优先级比include低]
   * 默认: undefined
   */
  exclude?: string[] | undefined;
  /**
   * 自定义变量
   * 默认: {}
   */
  vars?: { [key: string]: string };
}

export const defineConfig = (config: IOrduresConfigs): IOrduresConfigs => {
  return config;
};

export const getOrduresConfig = (opts: IOrduresOptions = {}): IOrduresConfigs => {
  const options = {
    ...{
      rootPath: process.cwd(),
      configFile: '.ordures.config.js'
    },
    ...opts
  };
  const { rootPath, configFile } = options;

  let config: IOrduresConfigs = {
    enabled: true,
    theme: 'default',
    directory: 'es',
    exclude: undefined,
    include: undefined,
    vars: {}
  };
  const configPath = path.resolve(rootPath, configFile);
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config = Object.assign(config, require(configPath));
  }
  return config;
};

export const isValidModule = (moduleName: string): boolean => {
  const config = getOrduresConfig();
  if (
    (config.include && !config.include.includes(moduleName)) ||
    (config.exclude && config?.exclude.includes(moduleName))
  ) {
    return false;
  }
  return true;
};

export const getOrduresLessVariablesSync = () => {
  const { theme, directory, vars, enabled } = getOrduresConfig();
  if (!enabled) return {};
  const root = path.join(process.cwd(), `./node_modules/@ordures/ui/${directory}/${theme}`);
  const modules = fs.readdirSync(root).filter((item) => item.indexOf('.') < 0);
  const ret: { [key: string]: string } = {};
  modules.forEach((module) => {
    if (isValidModule(module)) {
      const transformedObj = less2js(path.join(root, module, 'vars.less'), { stripPrefix: true });
      Object.assign(ret, transformedObj, vars);
    }
  });
  return ret;
};
