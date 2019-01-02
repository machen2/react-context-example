import React from 'react';
import { AppContext } from './AppProvider';
import Purple from './Purple';

const Blue = () => (
    <div className='blue'>
        <AppContext.Consumer>
            {(context) =>
                <button onClick={context.inc}>
                    Increase
                </button>
            }
        </AppContext.Consumer>
        <Purple />
    </div>
);

export default Blue;
