import React from 'react';

import Tag, { TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const WithOutline = (props: TagProps) => {
  return <Tag {...props} />;
};
WithOutline.args = {
  color: 'blue',
  label: 'Alex Ho',
  outline: true,
};

export const WithoutOutline = (props: TagProps) => {
  return <Tag {...props} />;
};

WithoutOutline.args = {
  color: 'blue',
  label: 'Alex Ho',
  outline: false,
};
