import React from 'react';
import Routers from "./routes";
import Toolbar from "./components/toolbar/Index";
import Window from "./components/window/Window";

const App = () => {
    return <>
        <Routers/>
        <Window/>
        <Toolbar/>
    </>;
};

export default App;
