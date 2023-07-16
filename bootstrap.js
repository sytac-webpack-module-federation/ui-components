import React from 'react';
import ReactDom from 'react-dom';
import Button from './src/Button';
import './src/LitButton';

const App = () => {
    return (
        <div>
            <h1>Module Federated UI components</h1>
            <hr />
            React Button component: <Button>Click me</Button>
            <br />
            <br />
            Lit Button component: <my-button title="Click me"></my-button>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('app'));