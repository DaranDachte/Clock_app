import "./App.css";
import Container from "./Components/Container/Container";
import { ApplicationContextProvider } from "./store";
function App() {
  return (
    <div>
      <ApplicationContextProvider>
        <Container />
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
