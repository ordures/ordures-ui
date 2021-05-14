import React from 'react';
import { Pagination } from 'antd';

export default () => {
  function onChange(pageNumber: any) {
    console.log('Page: ', pageNumber);
  }
  return (
    <section className="code-box">
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      <br />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
    </section>
  );
};
