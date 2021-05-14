import React from 'react';
import { Input } from 'antd';

export default () => (
  <section>
    <Input placeholder="请输入" />
    <Input style={{ marginTop: '20px' }} disabled placeholder="请输入" />
  </section>
);
