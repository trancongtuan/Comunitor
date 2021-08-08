import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

export const IbMenu = withStyles(() => ({
  paper: {
    // border: '1px solid #d3d4d5'
    borderRadius: 8,
    backgroundColor: 'white',
    boxShadow: '0px 2px 10px rgba(175, 175, 175, 0.5)',
  },
}))((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    disableAutoFocusItem
    {...props}
  />
));

export const IbMenuItem = withStyles((theme) => ({
  gutters: {
    padding: '6px 22px',
    margin: '4px 0px',
  },
  root: {
    minWidth: 143,
    ...theme.typography.body2,
    '&.active': {
      backgroundColor: '#FFF8DA',
      fontWeight: 'bold',
    },
    '&:hover': {
      backgroundColor: '#FFF8DA',
    },
  },
}))(MenuItem);

export const useIbMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return { anchorEl, handleClick, handleClose };
};
