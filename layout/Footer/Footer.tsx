import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
