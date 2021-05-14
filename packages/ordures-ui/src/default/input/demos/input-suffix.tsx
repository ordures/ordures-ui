import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <section>
    <Input placeholder="请输入" suffix={<SearchOutlined />} />
    <Input disabled style={{ marginTop: '20px' }} placeholder="请输入" suffix={<SearchOutlined />} />
  </section>
);
