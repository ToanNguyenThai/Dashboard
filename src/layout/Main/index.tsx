import { Outlet } from "react-router-dom";

import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";

export default function index() {
  return (
    <>
      <Sidebar></Sidebar>

      <Header></Header>
      <div style={{ marginTop: "80px", marginLeft: "300px" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
