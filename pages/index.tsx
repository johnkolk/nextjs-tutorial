import type { NextPage } from 'next';
import Htag from '../components/Htag';
import Button from '../components/Button';
import P from '../components/P';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  const onClick = (str: string) => {
    alert(`Test Alert - ${str}`);
  };

  return (
    <>
      <Htag tag="h1">Hello H1</Htag>
      <Htag tag="h2">Hello H2</Htag>
      <Htag tag="h3">Hello H3</Htag>
      <Button type="primary" className="test" onClick={() => onClick('tadsf 23423 423 4asdf asdext')}>
        Засандалить Настюше в попку член
      </Button>
      <Button arrow="down">Пример кнопки</Button>
      <P size="l">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis cupiditate delectus quaerat!
        Aliquam blanditiis corporis esse est mollitia perferendis provident quasi quod repellendus. A accusamus
        distinctio explicabo optio pariatur.
      </P>
      <P size="s">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis cupiditate delectus quaerat!
        Aliquam blanditiis corporis esse est mollitia perferendis provident quasi quod repellendus. A accusamus
        distinctio explicabo optio pariatur.
      </P>
    </>
  );
};

export default withLayout(Home);
