import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Buttons = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <button onClick={props.setToGood}>Good</button>
        <button onClick={props.setToNeutral}>Neutral</button>
        <button onClick={props.setToBad}>Bad</button>
      </p>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad;
  const avg = (props.good - props.bad) / total;
  const porc = (props.good / total) * 100;

  return ( total === 0 ? "No hay datos" :
    <div>
        <table>
          <thead>
            <tr>
              <th>
                Statistics
              </th>
            </tr>
          </thead>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={avg ? avg : 0} />
            <Statistic text="positive" value={porc ? porc : 0} />
          </tbody>
        </table>
      </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Buttons setToGood={setToGood} setToNeutral={setToNeutral} setToBad={setToBad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);