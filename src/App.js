import "./App.css";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState();
  const [percent, setPercent] = useState();
  const [custom, setCustom] = useState();
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState();
  const [total, setTotal] = useState();
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
        <p className="fs-600 fw-700">SPLI</p>
        <p className="fs-600 fw-700">TTER</p>
      </header>
      <main className="bg-white container flex">
        <div className="calc">
          <section>
            <h1>Bill</h1>
            <div className="input-wrapper">
              <label className="input-icon">
                <BsCurrencyDollar />
              </label>
              <input
                className="inputs"
                type="number"
                placeholder=""
                value={bill}
                onChange={handleMoney}
              />
            </div>
          </section>
          <section>
            <h1>Select Tip %</h1>
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
              <input
                className="inputs fs-600 fw-700"
                placeholder="Custom"
                type="number"
                value={custom}
                onChange={handleCustom}
              ></input>
            </div>
          </section>
          <section>
            <div className="flex no-zero-div">
              <h1>Number of People</h1>
              {people === 0 && <p className="no-zero fs-200">Can't be zero</p>}
            </div>
            <div className="input-wrapper">
              <input
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
