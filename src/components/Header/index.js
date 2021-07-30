import './index.css'
export default function Header({totalIncome}){
    return(
        <header className='header'>
            <h1 className='header-text'>Income tracker</h1>
            <h1 className='header-price'>Rs {totalIncome}</h1>
        </header>
    )
}