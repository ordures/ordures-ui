import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export default () => (
  <section>
    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    <Input disabled style={{ marginTop: '20px' }} addonBefore="http://" suffix=".com" defaultValue="mysite" />
  </section>
);
