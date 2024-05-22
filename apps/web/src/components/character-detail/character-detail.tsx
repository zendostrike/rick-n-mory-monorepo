import { Character } from '@react-n-morty-monorepo/data';

import styles from './character-detail.module.css';

export function CharacterDetail(props: Character) {
  return (
    <div className={styles.character_detail}>
      <img src={props.image} alt={`Character: ${props.name}`} />

      <div className={styles.list}>
        <h4>Name: {props.name}</h4>
        <h4>Status: {props.status}</h4>
        <h4>Species: {props.species}</h4>
        <h4>Type: {props.type ?? '-'}</h4>
        <h4>Gender: {props.gender}</h4>
        <h4>Origin: {props.origin.name}</h4>
        <h4>Location: {props.location.name}</h4>
        <h4>
          Episode:{' '}
          {props.episode.map((item) => item.split('/').pop()).join(', ')}
        </h4>
      </div>
    </div>
  );
}
