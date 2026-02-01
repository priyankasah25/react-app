import Expenses from "./components/Expenses";
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
            <h2>Let's get started</h2>
            <Expenses item = {expenses}/>
        </div>
    );
}

export default App;
