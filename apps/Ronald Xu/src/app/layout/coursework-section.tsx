import { Timeline } from 'antd';
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons';
import React from 'react';

const CourseworkSection: React.FC = () => {
  return (
    <div style={{ marginTop: 10 }}>
      <Timeline mode="alternate">
        <Timeline.Item
          dot={
            <CheckCircleTwoTone
              twoToneColor="#65eb79"
              style={{ fontSize: 20 }}
            />
          }
        >
          <div style={{ marginLeft: 5 }}>
            <h5>Fall 2020:</h5>
            <p>
              Physics I: Classical Mechanics, Multivariable Calculus, Discrete
              Mathematics, Intro to Media Studies
            </p>
          </div>
        </Timeline.Item>
        <Timeline.Item
          dot={
            <CheckCircleTwoTone
              twoToneColor="#65eb79"
              style={{ fontSize: 20 }}
            />
          }
        >
          <div style={{ marginRight: 15 }}>
            <h5>IAP 2021:</h5>
            <p>web.lab</p>
          </div>
        </Timeline.Item>
        <Timeline.Item
          dot={
            <CheckCircleTwoTone
              twoToneColor="#65eb79"
              style={{ fontSize: 20 }}
            />
          }
        >
          <div style={{ marginLeft: 5 }}>
            <h5>Spring 2021:</h5>
            <p>
              Intro to Algorithms, Fundamentals of Programming, Physics II:
              Electricity and Magnetism, Embedded Systems
            </p>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<LoadingOutlined style={{ fontSize: 20 }} />}>
          <div style={{ marginRight: 15 }}>
            <h5>Fall 2022 (in progress):</h5>
            <p>
              Machine Learning, Linear Algebra, Computation Structures, Intro to
              Acting, Probability and Random Variables
            </p>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export { CourseworkSection };
