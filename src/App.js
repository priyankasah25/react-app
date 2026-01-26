import ExpenseItem from './components/ExpenseItem';

function App(){
    let expenseDate = new Date(2026, 1, 26);
    let expenseTitle = "School Fess";
    let expenseAmount = 300;
    return (
        <ExpenseItem
            date = {expenseDate}
            title = {expenseTitle}
            amount = {expenseAmount}
        />
    );
}

export default App;
