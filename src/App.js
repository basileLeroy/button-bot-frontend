import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [status, setStatus] = useState();

    useEffect(() => {
        axios.get('http://localhost:9000/button-bot')
            .then(res => {
                setStatus(res.data.message);
                console.log(status);
            })
    }, []);


  return (
    <div className="App">
        <div className="bot">
            <h1>{status}</h1>
        </div>
        <div className="logo">
            <div className="wave"></div>
        </div>
    </div>
  );
}

export default App;
