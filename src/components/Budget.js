import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch  } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    step='10'
                    max='20000'
                    onChange = {(event) => 
                        { 
                            
                        dispatch({ type: 'SET_BUDGET', payload: (event.target.value) });
                        
                            /*if(budget > (event.target.value)) {
                                alert("Out of funds");
                            }else{
                                dispatch({ type: 'SET_BUDGET', payload: budget });
                            }  */
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