import { memo } from 'react';
import type { FC, ReactNode } from 'react';
interface IProps {
  children?: ReactNode;
}
const Category: FC<IProps> = () => {
  return <div>Category</div>;
};
export default memo(Category);
