import React, { useState } from "react";
import PopUp from "../components/popUp";
import "../styles/sidebar.css";
import "../styles/popup.css";
// import FileUpload from "../components/FileUpload";
// import Homepage from "../components/Homepage";

const Sidebar = () => {
  //State to manange the dialog visibility
  const [open, setOpen] = useState(false); //Control dropdown
  const [isPopupOpen, setPopupOpen] = useState(false);
  ///////////////////////
  const [folders, setFolders] = useState([]);

  //////////////////////
  //Function to open the popup
  const openPopup = () => {
    setPopupOpen(true);
  };
  //Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  // if (isPopupOpen) {
  //   document.body.classList.add("active-popup");
  // } else {
  //   document.body.classList.remove("active-popup");
  // }

  // const handleAddFolder = ()=> {

  // }
    // Function to add a new folder
    const handleAddFolder = (folderName) => {
      // Create a new folder object
      const newFolder = {
        id: folders.length + 1, // You can generate unique IDs
        name: folderName,
      };
  
      // Update the list of folders
      setFolders([...folders, newFolder]);
  
      // Close the popup
      closePopup();
    };

  return (
    <div className="sidebar">
      <div>
        <ul className="menu-items">
          <li className="menu-item" onClick={openPopup}>
            <i className="fas fa-plus"></i> New Folder
          </li>
          {/*/////////////////// adding folder /////////////////*/}
          {folders.map((folder) => (
            <li className="menu-item" key={folder.id}>
              <i className="fas fa-folder-open"></i> {folder.name}
            </li>
          ))}

          <li className="menu-item">
            <i className="fas fa-trash"></i> Trash
          </li>
          <li className="menu-item">
            <i className="fas fa-life-ring"></i> Support
          </li>
          {/* Add logic for the New Folder popup dialog */}
          {isPopupOpen && (
            <PopUp onCancel={closePopup} onAddFolder={handleAddFolder} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
