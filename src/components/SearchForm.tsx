import React from "react"

interface SearchFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ handleSubmit}) => {

    return(
        
        <form
            className="input-container"
            onSubmit={handleSubmit}
        >
            <label htmlFor="userText"></label>
            <input
                className="search-user-input"
                placeholder="Enter Username"
                type="text"
                id="userText"
            />
            <input className="input-btn" type="submit" value="search" />
        </form> 
)
};
