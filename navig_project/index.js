/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navigation from './Navigator/navigation'
import { name as appName } from './app.json';


const MainApp = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => MainApp);
