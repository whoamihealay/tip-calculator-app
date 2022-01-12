import "./App.css";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Percentage from "./components/Percentage";

function App() {
  // State
  const [style, setStyle] = useState("");
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
    if (e.target.value === "") {
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: 1,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.id]: parseFloat(e.target.value),
      }));
    }
    if (e.target.id === "percent") {
      inactiveAll();
    }
  };

  // When the predefined tip percentage is clicked, update the state and background color.
  const handlePercent = (value: number) => {
    setInputs((prev) => ({
      ...prev,
      percent: value,
    }));
    activeTip(value.toString());
  };

  // When the reset button is clicked, reset the state to intial values.
  const handleReset = () => {
    setInputs({
      bill: 0,
      percent: 0,
      people: 1,
    });
    inactiveAll();
  };

  // When called, change the background of the predefined tip value
  const activeTip = (value: string) => {
    inactiveAll();
    const getTip = document.getElementById(value);
    getTip!.style.backgroundColor = "var(--clr-strong-cyan)";
  };

  // When called reset the background of all predefined tip buttons to intial state.
  const inactiveAll = () => {
    const resetTip = document.getElementsByName("percent");
    for (let i = 0; i < resetTip.length; i++) {
      resetTip[i].style.backgroundColor = "";
    }
  };

  // set bill limit to 99 999 (Purely for overflow purposes)
  useEffect(() => {
    if (inputs.bill >= 99999) {
      setInputs((prev) => ({
        ...prev,
        bill: 99999,
      }));
    }
  }, [inputs.bill]);

  // When the number of people changes, check if the number if equal to 0.
  useEffect(() => {
    if (inputs.people === 0) {
      setStyle("no-people");
    } else {
      setStyle("yes-people");
    }
  }, [inputs.people]);

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
    <div className="App container">
      <header className="header">
        <h1 className="header__title">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="main container">
        <div>
          <section>
            <h2>Bill</h2>
            <div className="input__wrapper">
              <span className="input__icon">
                <BsCurrencyDollar />
              </span>
              <input
                id="bill"
                className="input"
                type="number"
                placeholder="0"
                value={inputs.bill}
                onChange={handleInputs}
                min="0"
                max="99999"
              />
            </div>
          </section>
          <section>
            <h2>Select Tip %</h2>
            <div className="tip-grid grid text-white fs-700">
              <Percentage id={5} handle={handlePercent} />
              <Percentage id={10} handle={handlePercent} />
              <Percentage id={15} handle={handlePercent} />
              <Percentage id={25} handle={handlePercent} />
              <Percentage id={50} handle={handlePercent} />
              <input
                id="percent"
                className="custom fs-600 fw-700"
                placeholder="Custom"
                type="number"
                value={inputs.percent}
                onChange={handleInputs}
                min="0"
              ></input>
            </div>
          </section>
          <section>
            <div className="flex no-zero-div">
              <h2>Number of People</h2>
              {inputs.people === 0 && (
                <p className="no-zero fs-200">Can't be zero</p>
              )}
            </div>
            <div className="input__wrapper">
              <input
                id="people"
                className={style}
                type="number"
                onChange={handleInputs}
                value={inputs.people}
                min="0"
              />
              <span className="input__icon">
                <BsPersonFill />
              </span>
            </div>
          </section>
        </div>
        <section className="totals bg-dark text-white">
          <div className="flex totals--flex">
            <div className="flex totals--justify">
              <ul>
                <li>
                  <b>Tip Amount</b>
                </li>
                <li className="text-sm-white">
                  <b>/ person</b>
                </li>
              </ul>
              <h2 className="section__subtitle">${outputs.tip}</h2>
            </div>
            <div className="flex totals--justify">
              <ul>
                <li>
                  <b>Total</b>
                </li>
                <li className="text-sm-white">
                  <b>/ person</b>
                </li>
              </ul>
              <h2 className="section__subtitle">${outputs.total}</h2>
            </div>
          </div>
          <button className="btn reset text-dark fs-500" onClick={handleReset}>
            RESET
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
