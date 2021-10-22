import { FunctionComponent, ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { JSX } from '@babel/types';
import styles from './Layout.module.css'

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.body}>{children}</div>
        <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
