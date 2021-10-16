import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './P.module.css';
import cn from 'classnames';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}

const P = ({ children, size, ...props }: Props): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
