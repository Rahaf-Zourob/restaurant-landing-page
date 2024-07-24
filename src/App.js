import React from "react";
import Logo from "./components/logo/Logo";
import SearchBar from "./components/searchBar/SearchBar";
import FavCard from "./components/favCard/FavCard";
import FlexParent from "./components/flexParent/FlexParent";
import TextBox from "./components/TestBox";

function App() {
    return (
        <>
            <Logo />
            <SearchBar />
            <FavCard />
            <TextBox />

        
            <FlexParent direction="column" >
            <TextBox /> <TextBox /> <TextBox />
            </FlexParent>
        </>
    );
}

export default App;
