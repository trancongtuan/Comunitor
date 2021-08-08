import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

import { IbMenu, IbMenuItem, useIbMenu } from './Menu';

export default {
  title: 'Components/Menu',
  component: IbMenu,
};

export const Primary = () => {
  const { anchorEl, handleClick, handleClose } = useIbMenu();

  return (
    <div>
      <Button aria-controls="customized-menu" aria-haspopup="true" variant="text" onClick={handleClick}>
        <MoreVertIcon />
      </Button>
      <IbMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <IbMenuItem>New group</IbMenuItem>
        <IbMenuItem>New individual</IbMenuItem>
        <IbMenuItem>Starred</IbMenuItem>
        <IbMenuItem>Archived</IbMenuItem>
      </IbMenu>
    </div>
  );
};
