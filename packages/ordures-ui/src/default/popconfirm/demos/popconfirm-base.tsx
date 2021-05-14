import React from 'react';
import { Popconfirm, message } from 'antd';

export default () => {
  function confirm(e: any) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e: any) {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <section className="code-box">
      <Popconfirm title="Are you sure to delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
    </section>
  );
};
