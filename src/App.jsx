import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Random from "./components/randomNumber/Random";
import Name from "./components/name/Name";
import { createContext, useState } from "react";
export const ChangeName = createContext(null);
function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <ChangeName.Provider value={[value, setValue]}>
        <Header />
        <Random />
        <Main />
        <Name />
      </ChangeName.Provider>
    </>
  );
}

export default App;
