import { Row, Col, Space } from 'antd';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div style={{ marginTop: 10, marginLeft: 10 }}>
      <Row gutter={26}>
        <Col span={12}>
          <Space direction="vertical">
            <Row>
              <Col span={24}>
                <div>
                  <h3>Hi, I'm Ronald :)</h3>
                  <p>
                    I'm currently a sophomore at MIT studying Computer Science
                    (6-3). In my free time, I enjoy playing basketball, coding
                    random things, and piano. Some of my favorite shows are
                    "Rick and Morty" as well as "Avatar: The Last Airbender".
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <figure>
                <div className="rounded p-2 shadow-sm bg-white">
                  <img
                    className="rounded"
                    width={640}
                    height={480}
                    src="../../assets/images/ybitysinthedark.jpg"
                    alt={'missing'}
                  />
                </div>
                <figcaption style={{ textAlign: 'center', marginTop: 5 }}>
                  <p>YBITYS and I at the Dome.</p>
                </figcaption>
              </figure>
            </Row>
          </Space>
        </Col>
        <Col span={12}>
          <iframe
            className="rounded"
            title="Resume"
            width="700"
            height="900"
            src="https://drive.google.com/file/d/1Dkz8-7E7Qft-RBxmBrvZHaFOwC91asJH7c9EXk6_MoQ/preview"
          />
        </Col>
      </Row>
    </div>
  );
};

export { AboutSection };
