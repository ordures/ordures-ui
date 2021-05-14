import React from 'react';
import { Pagination } from 'antd';

export default () => {
  function showTotal(total: any) {
    return `Total ${total} items`;
  }
  return (
    <section>
      <Pagination simple defaultCurrent={2} total={50} />
      <br />
      <br />
      <Pagination disabled simple defaultCurrent={2} total={50} />
      <br />
      <br />
      <Pagination size="small" total={50} />
      <br />
      <br />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <br />
      <br />
      <Pagination size="small" total={50} showTotal={showTotal} />
      <br />
      <br />
      <Pagination size="small" total={50} disabled showTotal={showTotal} showSizeChanger showQuickJumper />
    </section>
  );
};
