import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import InfoCard from './components/InfoCard';
import style from './index.module.scss';
interface IProps {
  children?: ReactNode;
}
const HomeAside: FC<IProps> = () => {
  return (
    <div className={style.homeAsideWrap}>
      <InfoCard />
    </div>
  );
};
export default memo(HomeAside);
