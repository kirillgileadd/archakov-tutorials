import React from 'react';
import Profile from "./Components/Profile";
import ProfileClass from "./Components/ProfileClass";

const App = () => {
    return (
        <div>
            <Profile name="Вася" registeredAt={new Date(2021, 5, 22)} />
            <ProfileClass name="Саша" registeredAt={new Date(2020, 1, 10)} />
        </div>
    );
};

export default App;