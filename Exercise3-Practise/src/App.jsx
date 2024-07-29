import { useState } from "react";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Result from "./components/Result";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(objectKey, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [objectKey]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Inputs userInput={userInput} onChangeInput={handleChange} />
      <Result userInput={userInput}/>
    </>
  );
}

export default App;
