import SearchBar from '@/app/components/SearchBar/SearchBar'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.main_navbar_container}>
      <div>Logo</div>
      <SearchBar />
    </div>
  )
}

export default NavBar