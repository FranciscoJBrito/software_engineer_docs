import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.main_search_container}>
      <div className={styles.search_input_container}>
        <button className={styles.btn_search}>
          <div className={styles.btn_search_icon_text_container}>
            <svg
              data-testid="geist-icon"
              fill="none"
              height="22"
              width="22"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              style={{ color: "#999" }}
            >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
              <path d="M16 16l4.5 4.5" />
            </svg>
            <span className={styles.btn_search_text}>Buscar</span>
          </div>
          <kbd className={styles.btn_search_hotkey}>
            <span className={styles.btn_search_hotkey_comand}>⌘</span>K
          </kbd>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
