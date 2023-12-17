import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Random from "./components/randomNumber/Random";
import Name from "./components/name/Name";
import { createContext, useState, useEffect } from "react";
import { Card } from "./components/card/Card";
export const ChangeName = createContext(null);
function App() {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const showCountries = async () => {
      try {
        const response = await fetch("http://localhost:3000/countries");
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    showCountries();
  }, []);
  return (
    <>
      <ChangeName.Provider value={[value, setValue]}>
        <Header />
        <Random />
        <Main />
        <Name />
        <div className="card-container">
          {datas.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </ChangeName.Provider>
    </>
  );
}

export default App;
