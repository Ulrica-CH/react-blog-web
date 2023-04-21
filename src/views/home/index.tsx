import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import style from './index.module.scss';
import { Button } from '@arco-design/web-react';
interface IProps {
  children?: ReactNode;
}
const Home: FC<IProps> = () => {
  const obj = {};

  return (
    <div className={style.homeWrap}>
      Home
      <Button type="primary">Hello Arco</Button>
    </div>
  );
};
export default memo(Home);
