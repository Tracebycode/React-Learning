import React from 'react';
import UserContext from '../context/usercontext';

function Profile() {
    const {user} = React.useContext(UserContext);
return (
    <div>
            <h2>Profile</h2>
            {user ? (
                    <div style={{border: '1px solid black', padding: '10px'}}>
                            <p>Username: {user.username}</p>
                            <p>Password: {user.passward}</p>
                    </div>
            ) : (
                    <p>Please log in to see your profile.</p>
            )}
    </div>
)
}

export default Profile
