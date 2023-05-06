import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import style from './index.module.scss';
interface IProps {
  children?: ReactNode;
}
const HomeContent: FC<IProps> = () => {
  return <div className={style.homeContentWrap}>HomeContent</div>;
};
export default memo(HomeContent);
