import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
  
  const handleFilterchange = ({ target: { value } }) => {
    if ( value === 'date' ){
      props.dispatch(sortByDate());
    } else if (value === 'amount'){
      props.dispatch(sortByAmount());
    }
  }

  // const handleOrderchange = ({ target: { value } }) => {
  //   if (value === 'Ascending') {
  //     props.dispatch(sortByDate());
  //   } else if (value === 'Descending') {
  //     props.dispatch(sortByAmount());
  //   }
  // }

  return (
    <div>
      <input 
        type='text' 
        value={props.filters.text}
        onChange={ (e) => { 
          props.dispatch(setTextFilter(e.target.value))
      }}/>
      <select onChange={ handleFilterchange }>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>
      {/* <select onChange={ handleOrderchange }>
        <option value='Ascending'>Ascending</option>
        <option value='Descending'>Descending</option>
      </select> */}
    </div>
  ) 
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);