import React from 'react';
import { Pagination } from 'antd';

export default () => (
  <section className="code-box">
    <Pagination defaultCurrent={6} total={500} />
  </section>
);
