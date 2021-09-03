import { Row, Col, Space } from 'antd';
import React from 'react';
import { cardStyle, pStyle, titleStyle } from './constants';
import {
  carouselOneText1,
  carouselOneText2,
  carouselOneText3,
  carouselOneText4,
  carouselOneText5,
} from './texts';

const CarouselOne: React.FC = () => {
  return (
    <div
      className="rounded"
      style={{
        ...cardStyle,
        textAlign: 'center',
      }}
    >
      <h3 style={titleStyle}>
        A Stuttering Degree Diagnosis Tool Based on a Neural Network Model
        Trained with Multimodal Data
      </h3>
      <Row align="middle">
        <Col span={9}>
          <div style={{ ...pStyle, textAlign: 'left' }}>
            <Space direction="vertical">
              <p style={{ color: '#fff' }}>{carouselOneText1}</p>
              <p style={{ color: '#fff' }}>{carouselOneText2}</p>
              <p style={{ color: '#fff' }}>{carouselOneText3}</p>
              <p style={{ color: '#fff' }}>{carouselOneText4}</p>
              <p style={{ color: '#fff' }}>{carouselOneText5}</p>
            </Space>
          </div>
        </Col>
        <Col span={15}>
          <iframe
            style={{ marginTop: -20, marginRight: -20 }}
            className="rounded"
            title="Paper"
            width={800}
            height={550}
            src="https://drive.google.com/file/d/15JEolf6XqxDtU0tYsm7IHlAvyiW4p2op/preview"
          />
        </Col>
      </Row>
    </div>
  );
};

export { CarouselOne };
