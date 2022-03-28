import React, { useEffect } from 'react';
import styled from 'styled-components';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function MintForm() {

    const increaseValue = event => {
        event.preventDefault();
        let currentValue = Number(document.getElementById('amount').value);

        if (currentValue >= 0) {
            let addValue = currentValue + 1;
            document.getElementById('amount').value = addValue;
            document.getElementById('total').value = addValue;
        }
    }

    const decreaseValue = event => {
        event.preventDefault();
        let currentValue = Number(document.getElementById('amount').value);
        if (currentValue > 0) {
            let removeValue = currentValue - 1;
            document.getElementById('amount').value = removeValue;
            document.getElementById('total').value = removeValue;
        }
    }

    return (
        <div className='mint-form-container col-lg-6 col-md-12'>
            <h2>MINT A GOON</h2>
            <form id='mint-form'>
                <p className=''><span>QUANTITY</span>
                    <input type="text" name="quantity" defaultValue="0" />
                </p>

                <p className=''>
                    <span>AMOUNT</span>
                    <span className='control-buttons'>
                        <button onClick={decreaseValue}>
                            <RemoveIcon className='removeButton'/>
                        </button>
                        <input type="text" id='amount' name="amount" defaultValue="0" />

                        <button onClick={increaseValue}>
                            <AddIcon className='addButton' />
                        </button>
                    </span>
                    <button id='max-button'>MAX</button>
                </p>
                <p className=''><span>TOTAL</span>
                    <input type="text" name="quantity" defaultValue="0" />
                </p>
                <button type='submit' id='mint-button' name='submit'>MINT</button>
            </form>
        </div>
    )
}


export default MintForm