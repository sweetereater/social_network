import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { addPost, onPostTextChange } from './state.js';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                onPostTextChange={onPostTextChange}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}



