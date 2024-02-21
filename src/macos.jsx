import {React, useState} from 'react'
import './macos.css'
import AppleMenu from './components/content/appleMenu/AppleMenu';
import FolderContent from './components/content/folderContent/folderContent';
import Folders from './components/content/folders/folders';
import MenuBar from './components/menuBar/menuBar';
import StatusBar from './components/statusBar/statusBar';
import ReactDOM from 'react-dom/client';

function Mac() {
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleAppleMenu = () => {
    setIsAppleMenuOpen(!isAppleMenuOpen);
  };

  const closeAppleMenu = () => {
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false);
    }
  };

  const openFolderContent = () => {
    setIsFolderOpen(true);
  };

  const closeFolderContent = () => {
    setIsFolderOpen(false);
  };

  return (
    <>
      <div className="wrapper">
        <StatusBar toggleAppleMenu={toggleAppleMenu} />
        <div className="inner_wrapper" onClick={closeAppleMenu}>
          <Folders openFolderContent={openFolderContent} />
          <FolderContent
            isFolderOpen={isFolderOpen}
            closeFolderContent={closeFolderContent}
          />
          <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
        </div>
        <MenuBar />
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Mac/>)