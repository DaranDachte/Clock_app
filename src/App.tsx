import "./App.css";
import Container from "./Components/Container/Container";
import { ApplicationContextProvider } from "./store";
function App() {
  return (
    <>
      <ApplicationContextProvider>
        <Container />
      </ApplicationContextProvider>
    </>
  );
}

export default App;
