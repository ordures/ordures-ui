import React from 'react';
import { Pagination } from 'antd';

export default () => {
  return (
    <section className="code-box">
      <Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`} />
    </section>
  );
};
