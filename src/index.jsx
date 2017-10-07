import React from 'react';
import ReactDOM from 'react-dom';

function Wrapper() {
    return(
        <div className="wrapper">
            <div className="shamil-img">
                <img src="./img/shamil.jpg" className="" alt="shamil"/>
            </div>
            <h1>Алисултанов Шамиль</h1>
            <h2>React Starter </h2>
        </div>
    );
}

ReactDOM.render(
    <Wrapper/>,
    document.querySelector('#app')
);
