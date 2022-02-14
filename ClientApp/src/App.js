import React from "react";
import { Toaster } from 'react-hot-toast';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Dashboard />
            <Toaster position="bottom-center" reverseOrder={false} />
        </>
    );
}

export default App;
