import React from 'react';

import { Flex } from './Flex';
import Icon, { IconName } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
};
const names: IconName[] = [
  'correct',
  'cancel',
  'line',
  'whatsapp',
  'fb',
  'seen',
  'received',
  'pending',
  'error',
  'sent',
  'warning',
  'search',
  'filter',
  'pen',
  'edit',
  'back',
  'mic',
  'emoji',
  'image',
  'attach',
  'send',
  'tags',
  'folder',
  'ellipsis',
  'triangle-down',
  'clear',
  'read',
  'ticket',
  'printer',
  'info',
  'delete',
  'forward',
  'reload',
  'edit-note',
  'nav-dashboard',
  'nav-chat-on',
  'nav-chat',
  'nav-contact-on',
  'nav-contact',
  'nav-scheduled-message',
  'nav-event',
  'nav-billing',
  'nav-setting',
  'add',
  'phone',
  'home',
  'email',
  'export',
  'wechat',
  'import',
];
export const Default = () => {
  return (
    <Flex maxWidth="900px" flexWrap="wrap">
      {names.map((name) => {
        return (
          <Flex key={name} m={5}>
            <Icon name={name} />
          </Flex>
        );
      })}
    </Flex>
  );
};
