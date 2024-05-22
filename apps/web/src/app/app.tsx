import { useState } from 'react';
import { useCharacters } from '@react-n-morty-monorepo/data';

import styles from './app.module.css';

import { CardList, Pagination, Navbar } from '../components';

export function App() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isPlaceholderData } = useCharacters({ page });

  const handleNext = () => {
    if (!isPlaceholderData && data?.info.next) {
      setPage((old) => old + 1);
    }
  };

  const handlePrev = () => {
    if (!isPlaceholderData && data?.info.prev) {
      setPage((old) => old - 1);
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

export default App;
