import React from 'react';
import { Pagination } from 'antd';

export default () => {
  function onShowSizeChange(current: any, pageSize: any) {
    console.log(current, pageSize);
  }
  return (
    <section className="code-box">
      <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
      <br />
      <br />
      <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} disabled />
    </section>
  );
};
