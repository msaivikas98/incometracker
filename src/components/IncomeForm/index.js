import './index.css'
import {useRef} from 'react'

export default function IncomeForm({income, setIncome}){
    const desc=useRef(null)
    const price=useRef(null)
    const date=useRef(null)

    const AddIncome=(event)=>{
        event.preventDefault()
        
        if(desc.current.value!==""&&price.current.value!==""&&date.current.value!==''){
        setIncome([...income,{
            "desc":desc.current.value,
            "price":price.current.value,
            "date":date.current.value
        }])

        desc.current.value=''
        price.current.value=''
        date.current.value=''
    }
    }
    
    return(
        <form onSubmit={AddIncome} className='form-input-container'>
            <div>
                <input className='form-input' type="text" placeholder="income description" ref={desc}/>
                <input type='number' className='form-input' placeholder="income price" ref={price}/>
                <input type='date' className='form-input' placeholder="income date" ref={date}/>
                <button type='submit' className='form-input-button'>Add</button>
            </div>
        </form>
    )
}