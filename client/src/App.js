//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  const [gatewaysName, setGatewaysName] = useState(""); //CASO QUEIRA ENTRAR COM NUMERO, INICIALIZAR COM 0 AO INVES DE ""
  const [serial_Number, setSerialNumber] = useState("");
  const [registered_Users, setRegisteredUsers] = useState("");
  const [ipv4, setIpv4] = useState("");
  const [gatewaysList, setGatewaysList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setGatewaysList(response.data);
    })
  }, [])

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      name: gatewaysName,
      serialNumber: serial_Number, 
      registeredUsers: registered_Users, 
      ipV4: ipv4
    });
  }

  return (
    <div className="App">
      <h1>CRUD with MERN</h1>
      <label>Nome do Gateway </label>
      <input 
        type="text" 
        onChange={(event) => {
        setGatewaysName(event.target.value)
      }}
      />
      <label>Serial Number </label>
      <input 
        type="text" 
        onChange={(event) => {
        setSerialNumber(event.target.value)
      }}
      />
      <label>Registered Users </label>
      <input 
        type="text" 
        onChange={(event) => {
        setRegisteredUsers(event.target.value)
      }}
      />
      <label>ipV4 </label>
      <input 
        type="text" 
        onChange={(event) => {
        setIpv4(event.target.value)
      }}
      />
      <button onClick={addToList}>Add</button>

      
    </div>
  );
}

export default App;
