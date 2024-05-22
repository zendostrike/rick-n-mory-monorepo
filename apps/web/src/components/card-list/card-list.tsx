import type { Character } from '@react-n-morty-monorepo/data';

import styles from './card-list.module.css';

import { Card } from '../card/card';

type Props = {
  items?: Character[];
};

export function CardList({ items = [] }: Props) {
  return (
    <div className={styles['card-list']}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          species={item.species}
          srcImage={item.image}
        />
      ))}
    </div>
  );
}
