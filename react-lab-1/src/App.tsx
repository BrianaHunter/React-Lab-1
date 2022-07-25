import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="ad-container">
        <Ad flavor={""} fontSize={0} darkTheme={false} />
        <Ad flavor={""} fontSize={0} darkTheme={false} />
        <Ad flavor={""} fontSize={0} darkTheme={false} />
      </div>
      <div className="container">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
