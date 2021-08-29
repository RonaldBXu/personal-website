import React from 'react';
import { Card, Row } from 'antd';
import { ProfilePicture } from '../shared-components/profile-picture';
import { RonaldInfo } from './ronald-info';
import { Flex } from '../layout/flex';

const AppHeader: React.FC = () => {
  return (
    <Card style={{ marginTop: 10, marginRight: 350, marginLeft: 350 }}>
      <Row justify="center">
        <Flex flexDirection="row">
          <Row align="middle">
            <ProfilePicture src={'../assets/images/ronald.jpg'} />
            <RonaldInfo />
          </Row>
        </Flex>
      </Row>
    </Card>
  );
};

export { AppHeader };
