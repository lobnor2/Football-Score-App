import './App.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Football Score</h1>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
