import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default () => (
  <section>
    <TextArea rows={4} />
    <TextArea disabled style={{ marginTop: '20px' }} rows={4} />
  </section>
);
