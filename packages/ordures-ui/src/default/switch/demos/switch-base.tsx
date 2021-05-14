import React from 'react';
import { Switch } from 'antd';

export default () => {
  function onChange(checked: any) {
    console.log(`switch to ${checked}`);
  }
  return <Switch defaultChecked onChange={onChange} />;
};
