import React, { useState } from "react";
import "../styles/homepage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Autosuggest from 'react-autosuggest';

function Homepage({ onClose, onShare  }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [notification, setNotification] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : ""); // Set the selected file name or an empty string
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setNotification("Please select a file before uploading.");
    } else {
      const uploadedFileName = selectedFile.name;
      setNotification(`File "${uploadedFileName}" uploaded successfully!`);
    }
  };
///////////////////////sharing logic ////////////////////////////

const [showModal, setShowModal] = useState(false);
const [recipient, setRecipient] = useState('');

const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};
const [content, setContent] = useState('');
const handleShare = (recipient, content) => {
  // Implement sharing logic here
  console.log(`Sharing with: ${recipient}`);
  closeModal(); // Close the modal after sharing

   // Implement sharing logic here, e.g., send notifications to the recipient.
   if (recipient && content) {
    
    // Simulate sharing success for demonstration purposes
    toast.success(`Shared with: ${recipient}`);

      // Simulate sharing success for demonstration purposes
      const sharedData = {
        recipient,
        content,
        file: selectedFile, // Include the selected file
      };
      onShare(sharedData);
      onClose(); // Close the modal after sharing
  } else {
    // Show an error message if recipient or content is missing
    toast.error('Please enter both recipient and content.');
  }
};

toast.success(`Shared with: ${recipient}`, {
  position: toast.POSITION.BOTTOM_RIGHT,
});

// const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (event, { newValue }) => {
//     setValue(newValue);
//   };

  // const getSuggestions = (value) => {
  //   Implement logic to fetch email/username suggestions here.
  //   For example, filter from a list of existing users.
  //   const suggestions = existingUsers.filter((user) =>
  //     user.toLowerCase().includes(value.toLowerCase())
  //   );
  //   return suggestions;
  // };
/////////////////////////////////////////////////
  return (
    <div className="pagehome">
      <div className="background-image">
        <div className="content">
          <h1>Welcome to Your Homepage</h1>
          <p>Get started with our amazing platform.</p>
          <div className="file-upload">
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose File
            </label>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .pdf"
            />
            {selectedFileName && (
              <p className="selected-file">{selectedFileName}</p>
            )}
          </div>
          <button onClick={handleUpload} className="upload-button">
            Upload
          </button>
          {notification && <p className="notification">{notification}</p>}
         {/* /////////////////// share component /////////////////////////////// */}
          {/* <div className="share">  
          <button onClick={openModal}>Share</button>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
              <span className="close" onClose={closeModal} onShare={handleShare}>
              &times;
             </span>
                  <span className="close" onClick={onClose}>
                &times;
              </span>
                <h2>Share Content</h2>
                <input
                  type="text"
                  placeholder="Enter recipient's username or email"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
                    <textarea
              placeholder="Enter content to share"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <textarea
          placeholder="Enter content to share"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
             <div className="attach-upload">
             <label htmlFor="fileInput">Attach File:</label>
        <input
          type="file"
          id="fileInput"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p>Selected file: {selectedFile.name}</p>
        )}
          </div>
                <button onClick={handleShare}>Share</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </div>
            
          )}
          <ToastContainer limit={1} />
        </div> */}
        
        </div>
      </div>
    </div>
  );
}

export default Homepage;
