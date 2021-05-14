import React from 'react';
import { Switch } from 'antd';

export default () => {
  return (
    <>
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </>
  );
};
