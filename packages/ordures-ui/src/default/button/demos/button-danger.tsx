import React from 'react';
import { Button } from 'antd';

import './index.less';

const ButtonDanger = () => {
  return (
    <section className="container-button-code-box">
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </section>
  );
};

export default ButtonDanger;
