import React from 'react';
import { Pagination } from 'antd';

export default () => {
  function itemRender(current: any, type: string, originalElement: any) {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  return (
    <section className="code-box">
      <Pagination total={500} itemRender={itemRender} />
    </section>
  );
};
