import React from 'react';
import { Avatar } from 'antd';
import { ProfilePictureProps } from './shared-components.model';

const ProfilePicture: React.FC<ProfilePictureProps> = ({src}) => {
  return (
    <div
      className="rounded p-2 bg-white shadow-sm mb-3"
    >
      <Avatar shape="square" size={145} src={src} />
    </div>
  );
};

export { ProfilePicture };
