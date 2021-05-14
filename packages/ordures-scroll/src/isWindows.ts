export default function isWindows() {
  return /windows|win32/i.test(navigator.userAgent);
}
