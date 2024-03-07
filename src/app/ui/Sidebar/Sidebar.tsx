import styles from './Sidebar.module.css'
import FileTree from '@/app/components/FileTree/FileTree'

const Sidebar = () => {
  return (
    <div className={styles.main_container}>
      <FileTree />
    </div>
  )
}

export default Sidebar