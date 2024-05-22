import styles from './navbar.module.css';

import { Search } from '../search';
//import { Clear } from '../clear';
import { useStore } from '../../store';

export function Navbar() {
  const { name, species, onChangeName, onChangeSpecies } = useStore();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeName(e.target.value);
  };

  const handleChangeSpecies = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSpecies(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <img src="logo.svg" alt="" width={160} />
      </div>

      <div className={styles.search_section}>
        <Search type="name" value={name} onChange={handleChangeName} />

        <Search type="species" value={species} onChange={handleChangeSpecies} />

        {/* <Search />

        <Search />

        <Clear /> */}
      </div>
    </nav>
  );
}
