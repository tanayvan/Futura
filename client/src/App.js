import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { logout } from './utils/auth';

import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import Signup from './components/Auth/Signup/Signup';
import ForgotPassword from './components/Auth/Recovery_Email/ForgotPassword';
import ResetPassword from './components/Auth/Recovery_Email/ResetPassword';

function App(props) {
    const [user, setUser] = useState(props.user);
    // const [isSignup, setIsSignup] = useState(false);

    console.log('user', user);

    const handleLogout = () =>
        logout()
            .then(() => {
                setUser(() => '');
            })
            .catch((err) => {
                console.log(err);
            });

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(props) => (
                    <Home
                        {...props}
                        user={user}
                        setUser={setUser}
                        handleLogout={handleLogout}
                    />
                )}
            />
            <Route
                exact
                path="/signup"
                render={(props) => <Signup {...props} setUser={setUser} />}
            />
            <Route
                exact
                path="/forgotpassword"
                render={(props) => <ForgotPassword {...props} />}
                // component={ForgotPassword}
            />
            <Route
                exact
                path="/resetpassword/:resettoken"
                render={(props) => <ResetPassword {...props} />}
                // component={ResetPassword}
            />
            <Route
                exact
                path="/resources"
                render={(props) => <Resources {...props} />}
            />
        </Switch>
    );
}

export default App;
