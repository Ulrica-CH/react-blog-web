import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Grid } from '@arco-design/web-react';
import style from './index.module.scss';

import HomeAside from './components/HomeAside';
import HomeContent from './components/HomeContent';
interface IProps {
  children?: ReactNode;
}
const Home: FC<IProps> = () => {
  const Row = Grid.Row;
  const Col = Grid.Col;
  return (
    <div className={style.homeWrap}>
      <Row className="grid-demo" style={{ marginBottom: 16 }}>
        <Col span={18}>
          <HomeContent />
        </Col>
        <Col span={6}>
          <HomeAside />
        </Col>
      </Row>
    </div>
  );
};
export default memo(Home);
