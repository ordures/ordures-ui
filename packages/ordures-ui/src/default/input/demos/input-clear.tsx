import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default () => (
  <section>
    <Search allowClear placeholder="请输入" enterButton="搜索" value={2121421421421} />
    <Search disabled style={{ marginTop: '20px' }} allowClear placeholder="请输入" enterButton="搜索" value={2121421421421} />
  </section>
);
