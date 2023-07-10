import React from 'react';
import "./app.css";
import Header from './containers/layout/header';
import Dashboard from './containers/dashboard/dashboardComponent';
const App = () => {
    return(
        <div className='app-container'>
            <div className='header-container'>
                <Header />
            </div>
            <div className='body-container'>
                <Dashboard/>
            </div>

        </div>
    )
}

export default App;
