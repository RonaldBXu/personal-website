import React from 'react';
import { Row, Space } from 'antd';
import { EmailAndPhone } from './email-and-phone';
import { AddressAndWebsite } from './address-and-website';
import { Flex } from '../layout/flex';

const RonaldInfo: React.FC = () => {
  return (
    <div style={{ marginLeft: 30, marginBottom: 30 }}>
      <Row>
        <h2 style={{ marginLeft: -5 }} className="mb-0">
          Ronald Xu
        </h2>
      </Row>
      <Row gutter={8}>
        <Flex flexDirection="row">
          <Space>
            <EmailAndPhone />
            <AddressAndWebsite />
          </Space>
        </Flex>
      </Row>
    </div>
  );
};

export { RonaldInfo };
