import React from 'react'
import styles from "./Folders.module.css"

const folders = ({openFolderContent}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.folderWrapper}>
          <img
          onClick={openFolderContent} 
          alt = "folder"
          src='/images/folder.png'
          />
          
          <span className={styles.folderText}> Downloads </span>
        </div>
        <div className={styles.marginBottom20}> </div>
        <div className={styles.folderWrapper}>
          <img src = "/images/folder.png" alt = "folder "></img>
          <span className={styles.folderText}> Documents</span>
        </div>

      </div>
    
    </>
  )
}

export default folders