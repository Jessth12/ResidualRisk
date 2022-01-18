import React from "react"
import Home from "./pages/home";
import Admin_Dialog from "./pages/admin_dialog";
import { useState, useEffect } from "react";
import { storeValues } from './util/store';


const App = () => {
    const menuKey = useKeyPress('x');
    const [openAdmin, setOpenAdmin] = useState(false);
    const [store, setStore] = useState(storeValues);

    useEffect(() => {
        if (menuKey) {
            // menu key pressed
            setOpenAdmin(!openAdmin);
        }
    }, [menuKey])

    return (
        <div
          style={{
            backgroundColor: "#eee"
          }}
        >
            <Home store={store} />
            <Admin_Dialog open={openAdmin} store={store} setStore={setStore} />
        </div>
    )

}

// Hook
function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

export default App;