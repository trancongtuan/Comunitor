import { Box, withStyles } from '@material-ui/core';
import React from 'react';

export type TagColor = 'gray' | 'purple' | 'blue' | 'deepblue' | 'green' | 'yellow' | 'orange' | 'red';

export interface TagProps {
  color?: TagColor;
  name?: string;
  outline?: boolean;
  onRemove?: () => void;
  subdomain_id?: number;
  // label?: string;
  id?: string;
}

export const StyledBox = withStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.8,
    height: 22,
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    '& span': {
      paddingTop: 4,
      paddingLeft: 19,
      paddingRight: 18,
      paddingBottom: 4,
      fontFamily: theme.typography.fontFamily,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 11,
      letterSpacing: 0.07,
    },
  },
}))(Box);

const COLORS = {
  gray: {
    textColor: '#626264',
    backgroundColor: '#D4D4D4',
  },
  purple: {
    textColor: '#C073FD',
    backgroundColor: '#EFE3F4',
  },
  blue: {
    textColor: '#7596FF',
    backgroundColor: '#E8EAFB',
  },
  deepblue: {
    textColor: '#009FFF',
    backgroundColor: '#DBECFC',
  },
  green: {
    textColor: '#4FCF9F',
    backgroundColor: '#DCF4ED',
  },
  yellow: {
    textColor: '#FFD857',
    backgroundColor: '#FFF9E9',
  },
  orange: {
    textColor: '#FBB475',
    backgroundColor: '#FEEBDE',
  },
  red: {
    textColor: '#F67E8E',
    backgroundColor: '#FBE8EB',
  },
};

function Tag(props: TagProps) {
  const { backgroundColor, textColor } = COLORS[props.color ?? 'gray'];
  const [bgColor, setBgColor] = React.useState('white');
  return (
    <StyledBox
      id="tag"
      style={{
        color: textColor,
        borderStyle: props.outline ? 'solid' : 'none',
        backgroundColor: props.outline ? bgColor : backgroundColor,
      }}
      onMouseEnter={() => {
        props.outline && setBgColor(backgroundColor);
      }}
      onMouseLeave={() => {
        props.outline && setBgColor('white');
      }}
    >
      <span>{props.name}</span>
    </StyledBox>
  );
}

export default Tag;
