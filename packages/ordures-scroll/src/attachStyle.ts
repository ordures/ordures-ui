export default function attachStyle() {
  const code = `
    ::-webkit-scrollbar-track-piece {
      position: absolute;
      background-color: #fff;
      border-radius: 0;
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      height: 50px;
      background-color: #b8b8b8;
      border: 2px solid #fff;
      border-radius: 6px;
      outline: 2px solid #fff;
      outline-offset: -2px;
      -moz-opacity: 0.3;
      -khtml-opacity: 0.3;
      opacity: 0.5;
      filter: alpha(opacity = 30);
    }
    ::-webkit-scrollbar-thumb:hover {
      height: 50px;
      background-color: #878987;
    }
  `;
  const style: any = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  style.styleSheet?.cssText && (style.styleSheet.cssText = code);
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
