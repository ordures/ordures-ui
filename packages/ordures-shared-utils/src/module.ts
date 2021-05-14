import path from 'path';

export function resolveContext(pathName: string) {
  return path.resolve(process.cwd(), pathName);
}

export function resolvePath(pathName: string) {
  return path.resolve(__dirname, pathName);
}
