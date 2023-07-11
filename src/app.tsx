import React from 'react';
import "./app.css";
import Header from './containers/layout/header';
import DashboardComponent from './containers/dashboard/dashboardComponent';
const App = () => {
    return(
        <div className='app-container' data-testid="app">
            <div className='header-container' data-testid="header">
                <Header />
            </div>
            <div className='body-container' data-testid="body">
                <DashboardComponent/>
            </div>

        </div>
    )
}

export default App;
