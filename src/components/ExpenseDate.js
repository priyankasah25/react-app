import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'}) // toLocaleString -> date is object ushka method is toLocaleString
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{ month }</div>
            <dv className='expense-date__year'>{ year }</dv>
            <div className='expense-date__day'>{ day }</div>
        </div>
    );
}
export default ExpenseDate;