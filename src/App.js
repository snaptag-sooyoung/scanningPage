import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [startTime, setStartTime] = useState();
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
      <div>{leftTime}초 후 페이지 이동</div>
    </div>
  );
}

export default App;
