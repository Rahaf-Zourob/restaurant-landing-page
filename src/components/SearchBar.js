import React, { Children } from "react";

function SearchBar({ type = "text",label, placeholder, value, onChange, Children }) {
    return (
        <form>
            {label && <span>{label}: </span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {Children}
        </form>
    );
}

export default SearchBar;
