import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {

  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div id="layout">
      <div className="wrapper">
        <Header sidebars={[sidebarState, setSidebarState]} />
        <div className="main-wrapper">
          {sidebarState && <Sidebar />}
          <main>
            <Outlet />
          </main>
        </div>
      </div>

    </div>
  );
};

export default Layout;
