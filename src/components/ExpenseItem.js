import './ExpenseItem.css';

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'}) // toLocaleString -> date is object ushka method is toLocaleString
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    return (
        <div className='expense-item'>
            <div>
                <div>{ month }</div>
                <div>{ year }</div>
                <div>{ day }</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2> // jo data recieve hua hai direct use kar sakte or else make changes like done in date thing (means data manipulate karlo and use it)
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;