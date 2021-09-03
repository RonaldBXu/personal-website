import { Row, Col, Space, Divider } from 'antd';
import React from 'react';
import { cardStyle, pStyle, titleStyle } from './constants';
import { carouselTwoText1, carouselTwoText2 } from './texts';

const CarouselTwo: React.FC = () => {
  return (
    <div
      className="rounded"
      style={{
        ...cardStyle,
        textAlign: 'center',
      }}
    >
      <h3 style={titleStyle}>Simple Stock Simulator</h3>
      <Row align="middle">
        <Col span={9}>
          <p style={{ ...pStyle, textAlign: 'left' }}>
            {carouselTwoText1}
            <br />
            <br />
            {carouselTwoText2}
          </p>
        </Col>
        <Col span={15}>
          <img
            style={{ marginTop: -20, marginLeft: 60 }}
            className="rounded"
            title="Paper"
            width={800}
            height={550}
            src="../../assets/images/stocksimulator.jpeg"
            alt="missing"
          />
        </Col>
      </Row>
    </div>
  );
};

export { CarouselTwo };
