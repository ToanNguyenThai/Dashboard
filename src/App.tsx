import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import Login from "./layout/Login";
import Main from "./layout/Main";
import Mailbox from "./component/Mailbox";
import EmailList from "./component/Mailbox/component/EmailList";
import EmailDetails from "./component/Mailbox/component/EmailDetails";
import AddProduct from "./component/AddProduct";
import Projects from "./component/Projects";

import "./i18next";

import "./assets/css/global.css";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<ProtectedRoute component={Main} />}>
        <Route path="mail" element={<Mailbox />}>
          <Route path=":type" element={<EmailList />} />
          <Route path="details/:emailID" element={<EmailDetails />} />
        </Route>
        <Route path="addProduct" element={<AddProduct />}></Route>
        <Route path="projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
