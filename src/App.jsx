import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Random from "./components/randomNumber/Random";
import Name from "./components/name/Name";
import { createContext, useState, useEffect } from "react";
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
        console.log(data);
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
        {datas.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="Image" />
          </div>
        ))}
      </ChangeName.Provider>
    </>
  );
}

export default App;
