import styles from './search.module.css';

export function Search() {
  return (
    <div className={styles.search}>
      <div>Search by name:</div>

      <div>
        <input type="text" placeholder="Fill" className={styles.search_input} />
      </div>
    </div>
  );
}
