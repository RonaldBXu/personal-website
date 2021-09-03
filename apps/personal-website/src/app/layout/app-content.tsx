import { Card, Tabs } from 'antd';
import React from 'react';
import { AboutSection } from './about-section';
import { CourseworkSection } from './coursework-section';
import { AppContentProps } from './layout.model';
import { ProjectSection } from './project-section';
const { TabPane } = Tabs;

const AppContent: React.FC<AppContentProps> = ({ dark }) => {
  return (
    <div style={{ paddingBottom: 10 }}>
      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Tabs centered>
          <TabPane tab="About" key="1">
            <AboutSection />
          </TabPane>
          <TabPane tab="Projects" key="2">
            <ProjectSection dark={dark} />
          </TabPane>
          <TabPane tab="Coursework" key="3">
            <CourseworkSection />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export { AppContent };
