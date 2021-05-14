import { Button } from 'antd';
import React from 'react';

const ButtonBlock = () => {
  return (
    <section className="container-button-code-box">
      <Button type="primary" block>
        Primary
      </Button>
      <br />
      <br />
      <Button block>Default</Button>
      <br />
      <br />
      <Button type="dashed" block>
        Dashed
      </Button>
      <br />
      <br />
      <Button type="link" block>
        Link
      </Button>
    </section>
  );
};

export default ButtonBlock;
