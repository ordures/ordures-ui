import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default () => {
  return (
    <section>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <br />
      <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
    </section>
  );
};
