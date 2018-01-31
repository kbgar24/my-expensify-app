import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

 const ExpenseListItem = ({amount, createdAt, description, id, dispatch}) => {

   const handleRemoveExpense = () => {
    dispatch((removeExpense({ id })));
  }

  return (
    <div>
      <h3>{description}</h3>
      <p> {amount} - {createdAt} </p>
      <button onClick={ handleRemoveExpense } >Remove</button>
    </div>
  )
}

export default connect()(ExpenseListItem);
    // <table>
    //   <tbody>
    //     <tr>
    //       <th>Description</th>
    //       <th>Amount</th>
    //       <th>CreatedAt</th>
    //     </tr>
    //     <tr>
    //       <td>{props.description}</td>
    //       <td>{props.amount}</td>
    //       <td>{props.createdAt}</td>
    //     </tr>
    //   </tbody>
    // </table>