import styles from './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to List!</h1>
    </div>
  );
}

export default List;
