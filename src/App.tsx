import { useState, useEffect } from "react";
import Totals from "./components/Totals";
import Percents from "./components/Percents";
import People from "./components/People";
import Bill from "./components/Bill";
import { H1 } from "./components/styles/Titles.styled";
import { AppContainer, Main } from "./components/styles/Container.styled";
import Footer from "./components/Footer";

function App() {
  // State
  const [inputs, setInputs] = useState({
    bill: 0,
    percent: 0,
    people: 1,
  });
  const [outputs, setOutputs] = useState({
    tip: 0,
    total: 0,
  });

  // Handlers
  const handleInputs = (e: { target: { id: string; value: string } }) => {
    if (e.target.value === "" || e.target.value === null) {
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: 0,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: parseFloat(e.target.value),
      }));
    }
  };

  // When the predefined tip percentage is clicked, update the state and background color.
  const handlePercent = (value: number) => {
    setInputs((prev) => ({
      ...prev,
      percent: value,
    }));
  };

  // When the reset button is clicked, reset the state to intial values.
  const handleReset = () => {
    setInputs({
      bill: 0,
      percent: 0,
      people: 1,
    });
  };

  // When called reset the background of all predefined tip buttons to intial state.
  const inactiveAll = () => {
    const resetTip = document.getElementsByName("percent");
    for (let i = 0; i < resetTip.length; i++) {
      resetTip[i].style.backgroundColor = "";
    }
  };

  useEffect(() => {
    let getTip = document.getElementById(inputs.percent.toString());
    if (getTip !== null) {
      inactiveAll();
      getTip.style.backgroundColor = "var(--clr-strong-cyan)";
    } else {
      inactiveAll();
    }
  }, [inputs.percent]);

  // set bill limit to 99 999 (Purely for overflow purposes)
  useEffect(() => {
    if (inputs.bill >= 99999) {
      setInputs((prev) => ({
        ...prev,
        bill: 99999,
      }));
    }
  }, [inputs.bill]);

  // When the bill, the tip percentage or the number people change: Recalculate the the tip amount
  useEffect(() => {
    const result = parseFloat(
      ((inputs.bill * inputs.percent) / 100 / inputs.people).toFixed(2)
    );
    if (inputs.people === 0) {
      setOutputs((prev) => ({
        ...prev,
        tip: 0.0,
      }));
    } else {
      setOutputs((prev) => ({
        ...prev,
        tip: result,
      }));
    }
  }, [inputs.bill, inputs.people, inputs.percent]);

  // When the bill, the tip percentage or the number of people change: Recalculate the total amount
  useEffect(() => {
    const result = parseFloat(
      (
        (inputs.bill + (inputs.bill * inputs.percent) / 100) /
        inputs.people
      ).toFixed(2)
    );
    if (inputs.people === 0) {
      setOutputs((prev) => ({
        ...prev,
        total: 0.0,
      }));
    } else {
      setOutputs((prev) => ({
        ...prev,
        total: result,
      }));
    }
  }, [inputs.bill, inputs.percent, inputs.people]);

  return (
    <AppContainer className="App">
      <H1>
        SPLI
        <br />
        TTER
      </H1>
      <Main>
        <div>
          <Bill inputs={inputs} handleInputs={handleInputs} />
          <Percents
            inputs={inputs}
            handleInputs={handleInputs}
            handlePercent={handlePercent}
          />
          <People inputs={inputs} handleInputs={handleInputs} />
        </div>
        <Totals outputs={outputs} handleReset={handleReset} />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
