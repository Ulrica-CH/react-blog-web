import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import style from './index.module.scss';
import { Image } from '@arco-design/web-react';
interface IProps {
  children?: ReactNode;
}
const InfoCard: FC<IProps> = () => {
  return (
    <div className={style.infoCardWrap}>
      <div className={style.infoCardMy}>
        <div className={style.infoCardMyAvatar}>
          <Image
            width={80}
            src="https://ali-oss.xmwpro.com/global/avatar.jpg"
            alt="lamp"
            style={{ borderRadius: '40px' }}
          />
        </div>
        <div className={style.infoCardMyDetail}>
          <p className={style.infoCardMyWel}>Hello，中午好，我是</p>
          <p className={style.infoCardMyName}>XY</p>
        </div>
      </div>
      <div className={style.content}>
        <p></p>
        <p></p>
      </div>
      <div className={style.footer}></div>
    </div>
  );
};
export default memo(InfoCard);
