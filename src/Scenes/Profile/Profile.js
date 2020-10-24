import React from 'react';

function Profile ({firstName, email, photoUrl}) {
    return (
        <div>
            <h1>{firstName}</h1>
            <p>{email}</p>
            <img src={photoUrl} />
        </div>
    )
}

export default Profile;
