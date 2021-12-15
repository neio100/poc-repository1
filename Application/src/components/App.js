import React from 'react';
import HeaderComponent from './HeaderComponent';
import PreferencesComponent  from './PreferencesComponent';

const App = (props) => (
    <div className="ecom-customer-preference-feature container mt-3">
        <h1 className="page-title">
            {props.notificationColHeader}
        </h1>
        <HeaderComponent {...props}/>
        <PreferencesComponent {...props}/>
    </div>
)
export default App;