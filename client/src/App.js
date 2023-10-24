import "./App.css";
import "./utils/variable.css";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import { Col, Container, Row } from "react-bootstrap";
import ManagePeople from "./screens/Manage-people/ManagePeople";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navbar />
        <Row>
          <Col xl={2}>
            <Sidebar />
          </Col>
          <Col xl={10}>
            <section>
              {/* <Dashboard /> */}
              <ManagePeople />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
