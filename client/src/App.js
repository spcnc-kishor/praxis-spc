import "./App.css";
import "./utils/variable.css"
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
