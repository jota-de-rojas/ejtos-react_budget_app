import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,Currency  } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ /*marginLeft: '1.5rem' ,*/ size: 10}}
                    step='10'
                    //max='20000'
                    onChange = {(event) => 
                        { 
                            
                        dispatch({ type: 'SET_BUDGET', payload: (event.target.value) });
                        
                        }    
                    }>
                </input>
            </span>
        </div>
    );
};
export default Budget;

   /* if(action === "Set") {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
*/