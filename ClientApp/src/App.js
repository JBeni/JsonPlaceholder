import React, { useState } from "react";
import { Toaster } from 'react-hot-toast';
import TodosComp from "./components/TodosComp";
import PostsComp from "./components/PostsComp";
import Navbar from "./components/Navbar";

function App() {
    const [showTodos, setShowTodos] = useState(false);

    const handleShowTodos = (value) => {
        setShowTodos(value);
    }

    return (
        <>
            <Navbar handleShowTodos={handleShowTodos.bind(this)} />
            {
                showTodos === false
                    ? <PostsComp />
                    : <TodosComp />
            }
            <Toaster position="bottom-center" reverseOrder={false} />
        </>
    );
}

export default App;
