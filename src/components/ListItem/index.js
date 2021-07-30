import './index.css'
export default function ListItem({item,index,removeEachItem}){
    
    const removeItem=()=>{
        removeEachItem(index)
    }

    return (
        <div className='list-item'>
            <h1 className='listitem-text'>{item.desc}</h1>
            <h1 className='listitem-text'>{item.price}</h1>
            <h1 className='listitem-text'>{item.date}</h1>
            <button className='listitem-button' onClick={removeItem}>delete</button>
        </div>
    )
}