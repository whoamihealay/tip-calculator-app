import "./App.css";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);
  const [custom, setCustom] = useState("");
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [style, setStyle] = useState();

  const handleMoney = (e) => {
    setBill(parseFloat(e.target.value));
    tipCalc();
    totalCalc();
  };

  const handlePeople = (e) => {
    if (e.target.value < 0) {
      setPeople(0);
    } else {
      setPeople(parseFloat(e.target.value));
    }
  };

  const handlePercent = (value) => {
    setPercent(value);
  };

  const handleCustom = (e) => {
    setPercent(parseFloat(e.target.value));
    setCustom(e.target.value);
  };

  const tipCalc = () => {
    const result = (bill * percent) / 100 / people;
    if (isNaN(result) || people === 0) {
      setTip("0.00");
    } else {
      setTip(result.toFixed(2));
    }
  };

  const totalCalc = () => {
    let result = (bill + (bill * percent) / 100) / people;
    if (isNaN(result) || people === 0) {
      setTotal("0.00");
    } else {
      setTotal(result.toFixed(2));
    }
  };

  const impossible = () => {
    if (people === 0) {
      setStyle("no-people");
    } else {
      setStyle("yes-people");
    }
  };

  const reset = () => {
    setBill(0);
    setPercent(0);
    setPeople(1);
    setTip(0);
    setTotal(0);
    setCustom("");
  };

  useEffect(() => {
    tipCalc();
    totalCalc();
    impossible();
  });

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
              <button
                className="btn percent bg-dark"
                onClick={() => handlePercent(5)}
              >
                5%
              </button>
              <button
                className="btn percent bg-dark"
                onClick={() => handlePercent(10)}
              >
                10%
              </button>
              <button
                className="btn percent bg-dark"
                onClick={() => handlePercent(15)}
              >
                15%
              </button>
              <button
                className="btn percent bg-dark"
                onClick={() => handlePercent(25)}
              >
                25%
              </button>
              <button
                className="btn percent bg-dark"
                onClick={() => handlePercent(50)}
              >
                50%
              </button>
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
            <h1 className="fs-800">${tip}</h1>
          </div>
          <div className="total total-flex flex">
            <ul>
              <li className="fw-700">Total</li>
              <li className="text-light fs-200 fw-700">/ person</li>
            </ul>
            <h1 className="fs-800">${total}</h1>
          </div>
          <button className="btn reset text-dark fs-500" onClick={reset}>
            RESET
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
