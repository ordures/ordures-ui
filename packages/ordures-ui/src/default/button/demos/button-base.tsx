import React from 'react';
import { Button } from 'antd';

import './index.less';

const ButtonBase = () => {
  return (
    <section className="container-button-code-box">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </section>
  );
};

export default ButtonBase;
