"use client"

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
    console.log("inside the counter component");
    const [count, setCount] = useState(0);

    //const {isLoaded, userId, sessionId, getToken } = useAuth();
    const {isLoaded, isSignedIn, user} = useUser();

    if (!isSignedIn) {
        return null;
    }

    return (
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    );
};