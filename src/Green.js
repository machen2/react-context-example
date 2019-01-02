import React from 'react';
import { AppContext } from './AppProvider';

const Green = () => (
    <div className='green'>
        <p>Here is the value from Green: </p>
        <AppContext.Consumer>
            {(context) => context.number}
        </AppContext.Consumer>
    </div>
);

export default Green;
