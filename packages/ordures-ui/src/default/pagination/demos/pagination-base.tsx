import React from 'react';
import { Pagination } from 'antd';

export default () => (
  <section className="code-box">
    <Pagination defaultCurrent={1} total={50} />
  </section>
);
