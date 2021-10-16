import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import Arrow from './arrow.svg';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  type?: 'primary';
  arrow?: 'right' | 'down';
}

const Button = ({ children, type, className, arrow, ...props }: Props): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: type === 'primary',
      })}
      {...props}
    >
      {children}

      {arrow && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};

export default Button;
