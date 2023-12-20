import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Random from "./components/randomNumber/Random";
import Name from "./components/name/Name";
import { createContext, useState, useEffect } from "react";
import { Card } from "./components/card/Card";
import { Info } from "./components/info/Info";
import { Form } from "./components/form/Form";
export const ChangeName = createContext(null);
function App() {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useState([]);
  const [details, setDetails] = useState({});
  const [view, setView] = useState(null);
  const [modal, setModal] = useState(false);

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

  const handleDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/countries/${id}`);
      const detailsData = await response.json();
      setDetails(detailsData);
      setView((prev) => (prev === id ? null : id));
    } catch (error) {
      console.error(error);
    }
  };
  console.log(view);
  const submitDatas = (e) => {
    e.preventDefault();
  };

  const deleteCard = async (id) => {
    console.log("Deleted");
    try {
      const response = await fetch(`http://localhost:3000/countries/${id}`, {
        method: "DELETE",
      });
      const detailsData = await response.json();
      console.log(detailsData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ChangeName.Provider value={[value, setValue]}>
        <Header />
        <Random />
        <Main />
        <Name />
        <div className="btn-container">
          <button className="country-btn" onClick={() => setModal(true)}>
            Add Country
          </button>
        </div>
        <div className="card-container">
          {datas.map((data) => (
            <Card
              key={data.id}
              data={data}
              onClick={() => handleDetails(data.id)}
              onDelete={() => deleteCard(data.id)}
            >
              {view === data.id && <Info details={details} />}
            </Card>
          ))}
        </div>
        {modal && (
          <Form
            onClick={() => setModal(false)}
            onSubmit={(e) => submitDatas(e)}
          />
        )}
        {/* <Form /> */}
      </ChangeName.Provider>
    </>
  );
}

export default App;
