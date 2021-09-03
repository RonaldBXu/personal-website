import { Carousel } from 'antd';
import React from 'react';
import { CarouselThree } from './carousel-blocks/carousel-three';
import { CarouselOne } from './carousel-blocks/carousel-one';
import { CarouselTwo } from './carousel-blocks/carousel-two';
import { ProjectSectionProps } from './layout.model';

const ProjectSection: React.FC<ProjectSectionProps> = ({ dark }) => {
  return (
    <Carousel autoplay>
      <div>
        <CarouselOne />
      </div>
      <div>
        <CarouselTwo />
      </div>
      <div>
        <CarouselThree dark={dark} />
      </div>
    </Carousel>
  );
};

export { ProjectSection };
