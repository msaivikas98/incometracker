import ListItem from '../ListItem'

export default function addListItem({income,setIncome}){
    if (income.length===0){
        return null
    }

    const removeEachItem=(i)=>{
        let newIncome=income.filter((eachItem,index)=>index!==i)
        setIncome(newIncome)
    }

    return (
        <div>
        {income.map((eachItem,index)=>(
            <ListItem item={eachItem} index={index} removeEachItem={removeEachItem}/>
        ))}
        </div>
    )
}