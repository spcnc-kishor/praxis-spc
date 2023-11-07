import "./App.css";
import "./utils/variable.css";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import { Col, Container, Row } from "react-bootstrap";
import ManagePeople from "./screens/Manage-people/ManagePeople";
import SignIn from "./screens/SignIn/SignIn";
import OnboardingHome from "./screens/OnboardingHome/OnboardingHome";
function App() {
  return (
    <>
      {/* <SignIn /> */}
      <OnboardingHome />

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
