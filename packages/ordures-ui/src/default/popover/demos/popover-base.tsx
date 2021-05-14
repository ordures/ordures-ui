import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    Content
  </div>
);

export default () => (
  <section>
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  </section>
);
