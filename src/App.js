import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [startTime, setStartTime] = useState();
  const [leftTime, setLeftTime] = useState(3);

  useEffect(() => {
    if (leftTime === 0) {
      window.location.replace("http://www.naver.com");
    } else {
      setTimeout(() => {
        setLeftTime(leftTime - 1);
      }, 1000);
    }
  }, [leftTime]);

  return <div className="App">{leftTime}초 후 페이지 이동</div>;
}

export default App;
