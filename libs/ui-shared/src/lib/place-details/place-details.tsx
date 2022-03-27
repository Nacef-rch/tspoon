import styles from './place-details.module.scss';

/* eslint-disable-next-line */
export interface PlaceDetailsProps {}

export function PlaceDetails(props: PlaceDetailsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlaceDetails!</h1>
    </div>
  );
}

export default PlaceDetails;
