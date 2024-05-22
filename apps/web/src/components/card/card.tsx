import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';

type Props = {
  id: string;
  name: string;
  species: string;
  srcImage: string;
};

export function Card({ id, name, species, srcImage }: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      <img src={srcImage} alt="character img" className={styles.card_img} />

      <div className={styles.info}>
        <h3>{name}</h3>
        <h4>{species}</h4>

        <span>More info...</span>
      </div>
    </div>
  );
}
