import React from 'react';
import { Button } from 'antd';

const ButtonGhost = () => {
  return (
    <section className="container-button-code-box site-button-ghost-wrapper">
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
    </section>
  );
};

export default ButtonGhost;
