import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <section>
    <Input placeholder="请输入" prefix={<UserOutlined />} />
    <Input disabled style={{ marginTop: '20px' }} placeholder="请输入" prefix={<UserOutlined />} />
  </section>
);
