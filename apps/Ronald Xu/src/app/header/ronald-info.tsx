import React, { useState } from 'react';
import { message, Row, Space } from 'antd';
import { EmailAndPhone } from './email-and-phone';
import { AddressAndWebsite } from './address-and-website';
import { Flex } from '../layout/flex';
import { RonaldInfoProps } from './header.model';

const RonaldInfo: React.FC<RonaldInfoProps> = ({ changeMode, dark }) => {
  return (
    <div style={{ marginLeft: 30, marginBottom: 30 }}>
      <Space direction="vertical">
        <Row>
          <h2
            style={{ marginLeft: dark ? 3 : -5 }}
            className="mb-0"
            onClick={changeMode}
          >
            {dark ? (
              <>Ronald Xu</>
            ) : (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a style={{ color: dark ? 'white' : '#1c3058' }}>Ronald Xu</a>
            )}
          </h2>
        </Row>
        <Row gutter={8}>
          <Flex flexDirection="row">
            <Space size="large">
              <EmailAndPhone />
              <AddressAndWebsite />
            </Space>
          </Flex>
        </Row>
      </Space>
    </div>
  );
};

export { RonaldInfo };
