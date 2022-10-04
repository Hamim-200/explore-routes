import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Detalis About:  {friend.name}</h1>
            <p>Call him/her: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <p>City: {friend.address.city}</p>
            <h2>Everythings you want to know about this person</h2>
        </div>
    );
};

export default FriendDetails;