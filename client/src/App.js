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
  const [newGatewayName, setNewGatewayName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setGatewaysList(response.data);
    })
  }, [])

  const addToList = () => {
    /*Axios.post("http://localhost:3001/insert", {
      name: gatewaysName,
      serialNumber: serial_Number, 
      registeredUsers: registered_Users, 
      ipV4: ipv4
    });*/
    console.log(gatewaysName+serial_Number+registered_Users+ipv4)
  }

  const updateName = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      name: newGatewayName       
    });
  }

  const deleteId = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)      
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

      <h1>Gateways List</h1>
      {gatewaysList.map((val, key) => {
        return (
        <div key={key} className="gateways">
            <h1> {val.name} </h1>
            <h1> {val.serialNumber} </h1>            
            <input 
              type="text"
              placeholder="New Gateway name..." 
              onChange={(event) => {
              setNewGatewayName(event.target.value)
              }}
            />
            <button onClick={() => updateName(val._id)}>Update</button>
            <button onClick={() => deleteId(val._id)}>Delete</button>                      
        </div>);
      })};
    </div>
  );
}

export default App;
