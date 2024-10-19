"use client";

import React, { useEffect, useState } from 'react';

const Popup = ({ message, position }) => {
    const style = {
        position: 'absolute',
        top: position.y,
        left: position.x,
        border: '1px solid black',
        background: 'white',
        padding: '10px'
    };

    return (
      <div className="text-black border border-black bg-white p-4 rounded shadow-lg" style={style}>
          {message}
      </div>
    );
};

const App = () => {
    const [popups, setPopups] = useState([]);

    const createPopup = () => {
        const newPopup = {
            message: "Join us in Warframe!",
            position: {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            }
        };
        setPopups(prevPopups => [...prevPopups, newPopup]); // Add new pop-up to the state array
    };

    useEffect(() => {
        createPopup(); // Trigger automatically when component mounts
        const intervalId = setInterval(createPopup, 1500); // Trigger popup every 3 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            {popups.map((popup, index) => (
                <Popup key={index} message={popup.message} position={popup.position} />
            ))}
        </div>
    );
};

export default function Page() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            alert("Warframe!");
        }, 3000); // Change the interval as needed
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <header>
                <h1>Wanna play Warframe?</h1>
            </header>
            <App /> {/* Render the App component here */}
        </main>
    );
}
