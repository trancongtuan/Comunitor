import { makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

import { customHue } from '../theme/customHue';

export type AlertProps = {
  type: 'error' | 'success' | 'warn' | 'info';
  variant?: 'big' | 'small';
  message?: string;
  children?: React.ReactNode;
  roundedCorner?: boolean;
  onClose?: () => void;
};

const useStyle = makeStyles((theme) => ({
  root: (props: AlertProps) => ({
    width: '100%',
    minWidth: '250px',
    height: `${props.variant === 'small' ? '45px' : '58px'}`,
    display: 'flex',
    borderRadius: `${props.roundedCorner === false ? 'none' : '6px'}`,
    fontFamily: theme.typography.fontFamily,
    '&.error': {
      background: customHue.red.light,
      '& .alert-title': {
        color: customHue.red.main,
      },
      '& .alert-icon, & .alert-close, & .alert-close-for-small': {
        color: customHue.red.main,
        border: `${props.variant === 'small' ? `1px solid ${customHue.red.main}` : 'none'}`,
      },
    },
    '&.success': {
      background: customHue.green.main,
      '& .alert-title': {
        color: customHue.green.light,
      },
      '& .alert-icon, & .alert-close, & .alert-close-for-small': {
        color: customHue.green.dark,
        border: `${props.variant === 'small' ? `1px solid ${customHue.green.light}` : 'none'}`,
      },
    },
    '&.warn': {
      background: customHue.pink.main,
      '& .alert-title': {
        color: customHue.orange.main,
      },
      '& .alert-icon, & .alert-close, & .alert-close-for-small': {
        color: customHue.orange.main,
        border: `${props.variant === 'small' ? `1px solid ${customHue.orange.main}` : 'none'}`,
      },
    },
    '&.info': {
      background: customHue.alert_info.main,
      '& .alert-title': {
        color: customHue.blue.light,
      },
      '& .alert-icon, & .alert-close, & .alert-close-for-small': {
        color: customHue.blue.dark,
        // border: `${props.variant === 'small' ? `1px solid ${customHue.blue.dark}` : 'none'}`,
        fontWeight: 600,
      },
    },
    '& .alert-head': {
      width: '60px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .alert-body': {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'relative',
      '& .alert-title': {
        fontWeight: '600',
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '-0.1px',
      },
      '& .alert-message': {
        fontWeight: 'normal',
        fontSize: `${props.variant === 'small' ? '15px' : '12px'}`,
        lineHeight: '18px',
        letterSpacing: '-0.0923077px',
        color: '#2E2E32',
      },
      '& .alert-close': {
        position: 'absolute',
        right: '20px',
        cursor: 'pointer',
      },
      '& .alert-close-for-small': {
        position: 'absolute',
        right: '20px',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '3px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '15px',
      },
    },
    '& a, & b': {
      textDecoration: 'underline',
    },
  }),
}));

const Alert = (props: AlertProps) => {
  const { type, message, variant, children, onClose } = props;
  const { root } = useStyle(props);
  let title = 'Success';
  if (type === 'error') {
    title = 'Error';
  }
  if (type === 'warn') {
    title = 'Warning';
  }
  if (type === 'info') {
    title = 'Info';
  }
  return (
    <div className={`${root} ${type}`}>
      <div className="alert-head">
        {type === 'success' && <img alt="success icon" src="/static/success.svg" />}
        {type === 'warn' && <img alt="warning icon" src="/static/warning.svg" />}
        {type === 'error' && <img alt="error icon" src="/static/error.svg" />}
        {type === 'info' && <img alt="info icon" src="/static/info.svg" />}
      </div>
      <div className="alert-body">
        {variant !== 'small' && <div className="alert-title">{title}</div>}
        <div className="alert-message">{message || children}</div>
        {props.variant === 'small' ? (
          <span className="alert-close-for-small" onClick={onClose}>
            Close
          </span>
        ) : (
          <CloseIcon className="alert-close" onClick={onClose} />
        )}
      </div>
    </div>
  );
};

export default Alert;
