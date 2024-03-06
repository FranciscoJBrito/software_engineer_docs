"use client";
import styles from "./Directory.module.css";
import PlusMinusIcon from "./PlusMinusIcon";
import { useState } from "react";

/* interface Files {
      files: {id: number;
      name: string;
      files: any[];
      }[];
} */

const Directory = ({ name, files }: { name: string; files: any[] }) => {
  const [openFolder, setOpenFolder] = useState(false);
  const handleOpenFolder = () => {
    setOpenFolder(!openFolder);
  };
  return (
    <div>
      <div className={styles.folder_container} onClick={handleOpenFolder}>
        <div className={styles.plus_minus_icon_container}>
          <PlusMinusIcon state={openFolder} />
        </div>
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
        >
          <path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662" />
        </svg>
        <p className={styles.folder_name}>{name}</p>
      </div>

      <div
        className={
          openFolder
            ? styles.folder_content_container_show
            : styles.folder_content_container_no_show
        }
      >
        {files.map((file) => {
          return (
            <div key={file.id} className={styles.folder_file_container}>
              <span data-tree-indent></span>
              <div className={styles.folder_file}>
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
                >
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                  <path d="M13 2v7h7" />
                </svg>
                <p className={styles.file_name}>{file.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Directory;
