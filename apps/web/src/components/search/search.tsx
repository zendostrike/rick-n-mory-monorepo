import styles from './search.module.css';

type Props = {
  type: 'name' | 'species' | 'status';
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function Search({ type, value, onChange }: Props) {
  return (
    <div className={styles.search}>
      <div>Search by {type}:</div>

      <div>
        <input
          type="text"
          placeholder="Fill"
          className={styles.search_input}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
