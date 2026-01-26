import ExpenseItem from './components/ExpenseItem';

function App(){

    let expenses = [
        {
            id: 'e1',
            date: new Date(2026,1,26),
            title: "School Fess",
            amount: 300
        },

        {
            id: 'e2',
            date: new Date(2026,1,27),
            title: "College Fess",
            amount: 350
        },

        {
            id: 'e3',
            date: new Date(2026,1,28),
            title: "Rental Fess",
            amount: 400
        },

        {
            id: 'e4',
            date: new Date(2026,1,29),
            title: "Vehical Fess",
            amount: 500
        }
    ];

    return (
        <div>
        <ExpenseItem
            date = {expenses[0].date}
            title = {expenses[0].title}
            amount = {expenses[0].amount}
        />

        <ExpenseItem
            date = {expenses[1].date}
            title = {expenses[1].title}
            amount = {expenses[1].amount}
        />

        <ExpenseItem
            date = {expenses[2].date}
            title = {expenses[2].title}
            amount = {expenses[2].amount}
        />

        <ExpenseItem
            date = {expenses[3].date}
            title = {expenses[3].title}
            amount = {expenses[3].amount}
        />
        </div>
    );
}

export default App;
