import * as React from 'react';

export type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => <button>{text}</button>;

export default Button