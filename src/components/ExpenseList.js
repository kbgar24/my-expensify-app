import React from 'react';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { props.expenses.map((expense, i) => (
      <ExpenseListItem 
        key={ expense.id }
        { ...expense }
      />
    )) }
  </div>
);

const mapStateToProps = (state) => {
  return {
    // expenses: state.expenses,
    // filters: state.filters
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);


// Behind the Scenes: 
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList)
