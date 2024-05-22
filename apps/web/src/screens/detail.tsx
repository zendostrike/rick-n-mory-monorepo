import { useParams } from 'react-router-dom';

import { useCharacter } from '@react-n-morty-monorepo/data';

import styles from './detail.module.css';
import { CharacterDetail } from '../components/character-detail';

export function Detail() {
  const { characterId } = useParams();
  const { data } = useCharacter({ id: characterId });

  if (!data) {
    return <div>Data is loading...</div>;
  }

  return (
    <div className={styles.detail_screen}>
      <CharacterDetail {...data} />
    </div>
  );
}
