import { useEffect, useState } from "react";
import "./App.css";
import AvImg from "../src/Assets/av.jpg";

function App() {
  const [leftTime, setLeftTime] = useState(3);

  useEffect(() => {
    if (leftTime === 0) {
      window.location.replace("https://mall.lottechilsung.co.kr/");
    } else {
      setTimeout(() => {
        setLeftTime(leftTime - 1);
      }, 1000);
    }
  }, [leftTime]);

  return (
    <div className="App">
      <div className="container">
        <img src={AvImg} alt="describe img" />
      </div>
    </div>
  );
}

export default App;
