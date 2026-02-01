import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    return (
        <div className='expense-item'>
            <ExpenseDate date={ props.date }/>
            <div className='expense-item__description'>
                {/*jo data recieve hua hai direct use kar sakte or else make changes like done in date thing (means data manipulate karlo and use it)*/}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;