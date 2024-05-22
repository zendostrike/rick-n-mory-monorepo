import { useCharacters } from '@react-n-morty-monorepo/data';

import styles from './home.module.css';

import { CardList, Navbar, Pagination } from '../components';
import { useStore } from '../store';

export function Home() {
  const { name, species, page, nextPage, prevPage } = useStore();
  const { data, isLoading, isPlaceholderData } = useCharacters({
    page,
    name,
    species,
  });

  const handleNext = () => {
    if (!isPlaceholderData && data?.info.next) {
      nextPage();
    }
  };

  const handlePrev = () => {
    if (!isPlaceholderData && data?.info.prev) {
      prevPage();
    }
  };

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className={styles.card_list_wrapper}>
        <CardList items={data?.results} />
      </div>

      <div className={styles.load_more_wrapper}>
        <Pagination
          hasNext={!!data?.info.next}
          hasPrev={!!data?.info.prev}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}
