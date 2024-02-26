import "./App.css";
import GetStarted from "./components/footer/getstarted";
import Header from "./components/header/header";
import Guide from "./components/main/guide";

function App() {
  return (
    <>
      <div>
        <Header />
        <Guide />
        <GetStarted />
      </div>
    </>
  );
}

export default App;
