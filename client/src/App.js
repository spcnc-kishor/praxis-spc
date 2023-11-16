import "./App.css";
import "./utils/variable.css";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import { Col, Container, Row } from "react-bootstrap";
import ManagePeople from "./screens/Manage-people/ManagePeople";
import SignIn from "./screens/SignIn/SignIn";
import OnboardingHome from "./screens/OnboardingHome/OnboardingHome";
import { Route, Routes } from "react-router-dom";
import CreatePassword from "./screens/CreatePassword/CreatePassword";
function App() {
  return (
    <>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<OnboardingHome />} path="/onboard" />
        <Route element={<CreatePassword />} path="/set-password" />
      </Routes>

      {/* <div className="App">
        <Container fluid>
          <Navbar />
          <Row>
            <Col xl={2}>
              <Sidebar />
            </Col>
            <Col xl={10}>
              <section>
                <ManagePeople />
              </section>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default App;
