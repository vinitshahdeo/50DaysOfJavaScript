import "./App.css";
import FooterComponent from "./components/Footer";
import JoinComponent from "./components/Join";
import MainComponent from "./components/Main";
import TitleComponent from "./components/Title";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <TitleComponent />
          <MainComponent />
          <JoinComponent />
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}


export default App;
