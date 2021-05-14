import { Select } from 'antd';
import React from 'react';

import './index.less';

const BaseSelect = () => {
  const { Option } = Select;

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <section className="container-code-box-select">
      <Select placeholder="请选择" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear placeholder="请选择">
        <Option value="lucy">Lucy</Option>
      </Select>
    </section>
  );
};

export default BaseSelect;
