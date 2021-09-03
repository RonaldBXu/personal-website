import React from 'react';
import { Card, Row, Col, Space } from 'antd';

const EmailAndPhone: React.FC = () => {
  return (
    <div>
      <Row>
        <Space>
          <span className="text-muted ml-2">Email:</span>
          <a href="mailto:ronaldxu@mit.edu" className="font-weight-semibold">
            ronaldxu@mit.edu
          </a>
        </Space>
      </Row>
      <Row>
        <Space>
          <span className="text-muted ml-2">Phone:</span>
          <span className="font-weight-semibold">(407) 779 2929</span>
        </Space>
      </Row>
    </div>
  );
};

export { EmailAndPhone };
