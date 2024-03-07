'use client'
import FileTree from "./components/FileTree/FileTree";
import styles from "./page.module.css";
import Sidebar from "./ui/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
