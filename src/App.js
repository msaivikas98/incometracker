import {useState,useEffect} from 'react'
import Header from './components/Header'
import IncomeForm from './components/IncomeForm';
import AddListItem from  './components/addListitem'
import './App.css';


function App() {

  const [income,setIncome]=useState([])

 const [totalIncome,setTotalIncome]=useState(0) 

  useEffect(()=>{
    let sumList=income.map(eachItem=>(
      parseInt(eachItem.price)
    ))
      let sumTotal=0
    for(let each of sumList){
      sumTotal+=each
    }
    
    setTotalIncome(sumTotal)

  },[income])

  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      <AddListItem income={income} setIncome={setIncome}/>
    </div>
  );
}

export default App;
