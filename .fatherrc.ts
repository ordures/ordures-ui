import { readdirSync } from 'fs';
import { join } from 'path';

const headPkgs = ['ordures-less2js', 'ordures-shared-utils'];
const otherPkgs = readdirSync(join(__dirname, `packages`)).filter((pkg) => !headPkgs.includes(pkg));

export default {
  cjs: 'babel',
  esm: false,
  pkgs: [...headPkgs, ...otherPkgs]
};
