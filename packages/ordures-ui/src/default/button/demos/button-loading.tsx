import React, { memo } from 'react';

import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class App extends React.Component<any, any> {
  state = {
    loadings: []
  };

  enterLoading = (index: number) => {
    this.setState(({ loadings }: any) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }: any) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings
        };
      });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <section className="container-button-code-box">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
      </section>
    );
  }
}

export default App;
