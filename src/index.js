import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const UserContext = React.createContext()
const userName = 'Siri'

ReactDOM.render(
    <UserContext.Provider value={userName}>
        <App />
    </UserContext.Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
