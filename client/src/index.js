import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserList from "./website/UserList";
import MoviesList from "./website/MoviesList";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
            user: new UserList(),
            movies: new MoviesList()
            
    }}>
        <App />

    </Context.Provider>,

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
