import "./App.css";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Percentage from "./components/Percentage";

function App() {
  // All states variables.
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);
  const [custom, setCustom] = useState("");
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [style, setStyle] = useState();

  // When the bill is inputed, update the state.
  const handleMoney = (e) => {
    if (e.target.value >= 99999) {
      setBill(parseFloat(99999));
    } else {
      setBill(parseFloat(e.target.value));
    }
  };

  // When the number of people is inputed, update the state
  const handlePeople = (e) => {
    if (e.target.value < 0) {
      setPeople(0);
    } else {
      setPeople(parseFloat(e.target.value));
    }
  };

  // When the predefined tip percentage is clicked, update the state and background color.
  const handlePercent = (value) => {
    setPercent(value);
    activeTip(value);
  };

  // When a custom tip amount is inputed, update the state and reset the background of predefined tip percentages.
  const handleCustom = (e) => {
    setPercent(parseFloat(e.target.value));
    setCustom(e.target.value);
    inactiveAll();
  };

  // When the reset button is clicked, reset the state to intial values.
  const handleReset = () => {
    setBill(0);
    setPercent(0);
    setPeople(1);
    setTip(parseFloat(0).toFixed(2));
    setTotal(parseFloat(0).toFixed(2));
    setCustom("");
    inactiveAll();
  };

  // When called, change the background of the predefined tip value
  const activeTip = (value) => {
    inactiveAll();
    const getTip = document.getElementById(value);
    getTip.style.backgroundColor = "var(--clr-strong-cyan)";
  };

  // When called reset the background of all predefined tip buttons to intial state.
  const inactiveAll = () => {
    const resetTip = document.getElementsByName("percent");
    for (let i = 0; i < resetTip.length; i++) {
      resetTip[i].style.backgroundColor = "";
    }
  };

  // When the number of people changes, check if the number if equal to 0.
  useEffect(() => {
    if (people === 0) {
      setStyle("no-people");
    } else {
      setStyle("yes-people");
    }
  }, [people]);

  // When the bill, the tip percentage or the number people change: Recalculate the the tip amount
  useEffect(() => {
    const result = (bill * percent) / 100 / people;
    if (isNaN(result) || people === 0) {
      setTip("0.00");
    } else {
      setTip(result.toFixed(2));
    }
  }, [bill, percent, people]);

  // When the bill, the tip percentage or the number of people change: Recalculate the total amount
  useEffect(() => {
    const result = (bill + (bill * percent) / 100) / people;
    if (isNaN(result) || people === 0) {
      setTotal("0.00");
    } else {
      setTotal(result.toFixed(2));
    }
  }, [bill, percent, people]);

  return (
    <div className="App flex">
      <header className="fs-600 fw-800">
        <h1 className="fs-600 fw-700">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="bg-white container flex">
        <div className="calc">
          <section>
            <h2>Bill</h2>
            <div className="input-wrapper">
              <label className="input-icon">
                <BsCurrencyDollar />
              </label>
              <label for="bill" className="sr-only">
                Bill
              </label>
              <input
                id="bill"
                className="inputs"
                type="number"
                placeholder="0"
                value={bill}
                onChange={handleMoney}
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
              <label for="custom" className="sr-only">
                Custom percentage
              </label>
              <input
                id="custom"
                className="custom fs-600 fw-700"
                placeholder="Custom"
                type="number"
                value={custom}
                onChange={handleCustom}
                min="0"
              ></input>
            </div>
          </section>
          <section>
            <div className="flex no-zero-div">
              <h2>Number of People</h2>
              {people === 0 && <p className="no-zero fs-200">Can't be zero</p>}
            </div>
            <div className="input-wrapper">
              <label for="people" className="sr-only">
                Number of people
              </label>
              <input
                id="people"
                className={style}
                type="number"
                onChange={handlePeople}
                value={people}
                min="0"
              />
              <label className="input-icon">
                <BsPersonFill />
              </label>
            </div>
          </section>
        </div>
        <div className="totals bg-dark text-white">
          <div className="tip total-flex flex">
            <ul>
              <li className="fw-700">Tip Amount</li>
              <li className="text-light fs-200 fw-700">/ person</li>
            </ul>
            <h2 className="fs-800">${tip}</h2>
          </div>
          <div className="total total-flex flex">
            <ul>
              <li className="fw-700">Total</li>
              <li className="text-light fs-200 fw-700">/ person</li>
            </ul>
            <h2 className="fs-800">${total}</h2>
          </div>
          <button className="btn reset text-dark fs-500" onClick={handleReset}>
            RESET
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
