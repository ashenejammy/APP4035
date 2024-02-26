import logo from './logo.svg';
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Greet from './components/Greet'
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CalculateButton from './components/CalculateButton';
import Display from './components/Display';
import Message from './components/Message';
import Login from './components/Login';
import StudentFrom from './components/Student';
import FeesBalanceCalculator from './components/FeeBalance';
import StudentSummary from './components/StudentSummary';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  // const [weight, setWeight] = useState(0);
  //   const [height, setHeight] = useState(0);
  //   const [bmi, setBMI] = useState(0);
  //   const [bmiCategory, setBMICategory] = useState('');

  //   const calculateBMI = () => {
  //       // Formula to calculate BMI: BMI = Weight (kg) / (Height (m))^2
  //       const heightInMeters = height / 100; // Convert height to meters
  //       const bmiResult = weight / (heightInMeters * heightInMeters);
  //       setBMI(bmiResult);

  //       // Categorize BMI
  //       if (bmiResult < 18.5) {
  //           setBMICategory('Underweight');
  //       } else if (bmiResult < 24.9) {
  //           setBMICategory('Normal Weight');
  //       } else {
  //           setBMICategory('Overweight');
  //       }
  //   };
  return (
    <div className="App">
      <h5>React CRUD operations using PHP API and MySQL</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser/>}/>
          <Route path='user/create' element={<CreateUser/>}/>
          <Route path='user/:id/edit' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
      {/* <h1>Calculate Your BMI</h1>
      <InputForm label="Weight (kg)" value={weight} onChange={setWeight} />
            <InputForm label="Height (cm)" value={height} onChange={setHeight} />
            <CalculateButton onClick={calculateBMI} />
            <Display bmi={bmi} bmiCategory={bmiCategory} /> */}
      {/* <img src="/Lebron.jpg" className='lebron' alt='Lebron'/> */}
      {/* <Greet dets="Professional Details"/>
      <ul>
        <li>Jonathan Ashene</li>
        <li>22 years</li>
        <li>Kenyan</li>
      </ul>
      <Greet edu="Education"/>
      <ul>
        <li>Primary: KJA</li>
        <li>High School: Dawamu</li>
        <li>University: USIU</li>
      </ul>
      <Greet exp="Work Experience"/>
      <ul>
        <li>Analyst at Google for 2 years.</li>
        <li>Intern at Safaricom.</li>
        <li>Software Developer for 3 years.</li>
      </ul>
      <Greet hobbs="Hobbies & Interests"/>
      <ul>
        <li>Coding</li>
        <li>Photographer</li>
        <li>Editor</li>
      </ul>
      <Greet refs="Referees"/>
      <ul>
        <li>Primary: Mr. Samuel</li>
        <li>High School: Mr. Mutuku</li>
        <li>University: Mr. Odour</li>
      </ul> */}
      {/* <Greet exp="Origi" profession="Footballer"/>
      <button>Follow Origi</button>
      <Greet name="Wajakoya" profession="politician"/>
      <p>This is the one that wanted to sell Hyena's balls</p>
      <Welcome name="Kemboi" profession="Athlete"/>
      <Welcome name="Origi" profession="Footballer"/>
      <Welcome name="Wajakoya" profession="politician"/> */}
      {/* <Greet/>
      <Greet/> */}
      {/*<Welcome/>*/}
      {/* {<Hello/>} */}
      {/* <Message/> */}
      {/* <Login/> */}
      {/* <StudentFrom/>
      <FeesBalanceCalculator/>
      <StudentSummary/> */}
    </div>
  );
}

export default App;
