import styles from './navbar.module.css';

import { Search } from '../search';
import { Clear } from '../clear';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src="logo.svg" alt="" width={160} />
      </div>

      <div className={styles.search_section}>
        <Search />
        <Search />
        <Search />
        <Clear />
      </div>
    </nav>
  );
}
