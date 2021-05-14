import React from 'react';
import { Tooltip } from 'antd';

const BaseTooltip = () => (
  <section>
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  </section>
);

export default BaseTooltip;
