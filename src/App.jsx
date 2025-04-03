/* eslint-disable no-unused-vars */
import {
  Banner,
  Header,
  Nav,
  About,
  Services,
  Work,
  Contact,
  Footer,
} from "./components";
import { FloatButton } from "antd";
import {
  CommentOutlined,
  AppstoreOutlined,
  ToTopOutlined,
  BranchesOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-scroll";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve the user's preference from local storage on initial render
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Save the current dark mode preference to local storage
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "light-theme" : "dark-theme"}`}>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />

      <div className="p-4 flex sm:hidden z-30 -mb-36">
        <FloatButton.Group
          className="-mb-20"
          trigger="click"
          type="default"
          shape="square"
          description="Menu"
          style={{
            right: -35,
            padding: "0px 123px 166px 0px",
          }}
          icon={<AppstoreOutlined />}
        >
          <Link to="header" smooth={true} duration={500}>
            <FloatButton icon={<ToTopOutlined />} />
          </Link>

          <Link to="about" smooth={true} duration={500}>
            <FloatButton />
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <FloatButton icon={<CommentOutlined />} />
          </Link>
          <Link to="project" smooth={true} duration={500}>
            <FloatButton icon={<BranchesOutlined />} />
          </Link>
          <Link to="contact" smooth={true} duration={900}>
            <FloatButton icon={<ContactsOutlined />} />
          </Link>
        </FloatButton.Group>
      </div>
    </div>
  );
};

export default App;
