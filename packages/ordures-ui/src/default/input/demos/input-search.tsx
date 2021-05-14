import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default () => (
  <section>
    <Search placeholder="请输入" enterButton="搜索" />
    <Search disabled style={{ marginTop: '20px' }} placeholder="请输入" enterButton="搜索" />
  </section>
);
