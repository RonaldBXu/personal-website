import React from 'react';
import { Row, Space } from 'antd';

const AddressAndWebsite: React.FC = () => {
  return (
    <div>
      <Row>
        <Space>
          <span className="text-muted ml-2">Address:</span>
          <span className="font-weight-semibold">
            550 Memorial Drive, Cambridge MA 02139
          </span>
        </Space>
      </Row>
      <Row>
        <Space>
          <span className="text-muted ml-2">Website:</span>
          <a href="/" className="font-weight-semibold">
            ronaldxu.com
          </a>
        </Space>
      </Row>
    </div>
  );
};

export { AddressAndWebsite };
