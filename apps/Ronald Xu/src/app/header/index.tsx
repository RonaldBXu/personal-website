import React from 'react';
import { Card, Row } from 'antd';
import { ProfilePicture } from '../shared-components/profile-picture';
import { RonaldInfo } from './ronald-info';
import { Flex } from '../layout/flex';
import { AppHeaderProps } from './header.model';

const AppHeader: React.FC<AppHeaderProps> = ({changeMode, dark}) => {
  return (
    <Card
      style={{
        marginTop: 10,
        marginRight: 350,
        marginLeft: 350,
        marginBottom: 10,
      }}
    >
      <Row justify="center">
        <Flex flexDirection="row">
          <Row align="middle">
            <ProfilePicture src={'../assets/images/ronald.jpg'} />
            <RonaldInfo changeMode={changeMode} dark={dark}/>
          </Row>
        </Flex>
      </Row>
    </Card>
  );
};

export { AppHeader };
