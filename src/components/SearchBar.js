import React from "react";

function SearchBar({ type = "text",label, placeholder, value, onChange, children }) {
    return (
        <form>
            {label && <span>{label}: </span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {children}
        </form>
    );
}

export default SearchBar;
