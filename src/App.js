import './App.css';
import Button from './Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(10);

  const name = "Kamthorn Sarawan";

  const employees = [
    { name: "AAAA", email: "aaaa@gmail.com", age: 19 },
    { name: "BBBB", email: "bbbb@gmail.com", age: 18 },
    { name: "CCCC", email: "cccc@gmail.com", age: 20 }
  ]
  console.log(employees);
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count ++</button>

        {employees.map((em, index) => (
          <li key={index}>
            ชื่อพนักงาน: {em.name}  | อีเมล์ : {em.email} | อายุ : {em.age}
          </li>
        ))
        }

        <h1>Hello {name} </h1>
        <Button text="OK" />
        <Button text="Cancel" />
      </div>
      <h1 className="text01">Test</h1>

    </>
  );
}

export default App;
