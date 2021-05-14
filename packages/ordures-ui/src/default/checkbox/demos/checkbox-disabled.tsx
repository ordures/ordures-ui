import React from 'react';
import { Checkbox } from 'antd';

export default () => (
  <section>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </section>
);
