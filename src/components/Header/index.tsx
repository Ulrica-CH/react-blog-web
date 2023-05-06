import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import type { FC, ReactNode } from 'react';
import { IconApps } from '@arco-design/web-react/icon';
import style from './index.module.scss';
import { navList } from '@/constants';
interface IProps {
  children?: ReactNode;
}
const Header: FC<IProps> = () => {
  return (
    <div className={style.headerWrap}>
      <div className={style.headerLeft}>
        <IconApps className={style.homeIcon} />
      </div>
      <div className={style.headerMid}>
        {navList.map(item => (
          <NavLink key={item.name} to={item.path}>
            <span className={style.midTitle}>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div>left</div>
    </div>
  );
};
export default memo(Header);
