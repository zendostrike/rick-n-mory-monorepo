import styles from './pagination.module.css';

type Props = {
  hasNext?: boolean;
  hasPrev?: boolean;
  onNext: () => void;
  onPrev: () => void;
};

export function Pagination({ hasNext, hasPrev, onNext, onPrev }: Props) {
  return (
    <div>
      {hasPrev ? (
        <button onClick={onPrev} className={styles.load_more}>
          ATRAS
        </button>
      ) : null}
      {hasNext ? (
        <button onClick={onNext} className={styles.load_more}>
          SIGUIENTE
        </button>
      ) : null}
    </div>
  );
}
