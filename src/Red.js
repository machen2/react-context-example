import React, {Component} from 'react';
import { AppProvider, AppContext } from './AppProvider';
import Blue from './Blue';

export default class Red extends Component {
    render() {
        return (
            <AppProvider>
                <div className='red'>
                    <div>
                        <p>Introduce our provider. Here is the value from Red: </p>
                        <AppContext.Consumer>
                            {(context) => context.number}
                        </AppContext.Consumer>
                    </div>
                    <Blue />
                </div>
            </AppProvider>
        );
    }
}