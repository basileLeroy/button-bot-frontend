import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [status, setStatus] = useState();
    const origin = "https://button-bot-client.glitch.me/button-bot"
    useEffect(() => {
        axios.get(origin)
            .then(res => {
                setStatus(res.data.message);
                console.log(status);
            })
    }, [status]);


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
