import { execSync } from 'child_process';

let _hasYarn: boolean;

// env detection
export const hasYarn = () => {
  try {
    execSync('yarn --version', { stdio: 'ignore' });
    return (_hasYarn = true);
  } catch (e) {
    return (_hasYarn = false);
  }
};
