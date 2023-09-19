import { useState, useEffect } from "react";
import { useDocumentsContext } from "../hooks/useDocumentsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import DocumentDetails from "../components/DocumentDetails";
import DocumentForm from "../components/DocumentForm";
import Sidebar from "../components/sideBar";
import Homepage from "../components/Homepage";
import FileUpload from "../components/FileUpload";
import SharePage from "./sharepage";

const Home = () => {
  const { documents, dispatch } = useDocumentsContext();
  const { user } = useAuthContext();
  const [activeMenuItem, setActiveMenuItem] = useState("menu-item home");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch("/api/documents", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DOCUMENTS", payload: json });
      }
    };

    if (user) {
      fetchDocuments();
    }
  }, [dispatch, user]);

  // Check if documents is null or undefined
  if (documents == null) {
    return <div className="home">Loading...</div>;
  }

  return (
    <div className="home">
      <div className="siding">
        <Sidebar
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
      {activeMenuItem === "menu-item upload" && <FileUpload />}
      {activeMenuItem === "menu-item home" && <Homepage />}
      {activeMenuItem === "menu-item share" && <SharePage />}
      {/* {documents.length > 0 ? (
        <div className="documents">
          {documents &&
            documents.map((document) => (
              <DocumentDetails key={document._id} document={document} />
            ))}
        </div>
      ) : (
        <div>
          <FileUpload />
        </div>
      )} */}
      <div className="forming">
        <DocumentForm />
      </div>
    </div>
  );
};

export default Home;
