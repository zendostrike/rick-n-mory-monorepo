import styles from './card.module.css';

type Props = {
  name: string;
  species: string;
  srcImage: string;
};

export function Card({ name, species, srcImage }: Props) {
  return (
    <div className={styles.card}>
      <img src={srcImage} alt="character img" className={styles.card_img} />

      <div className={styles.info}>
        <h3>{name}</h3>
        <h4>{species}</h4>

        <span>More info...</span>
      </div>
    </div>
  );
}
