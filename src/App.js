import React from 'react';

const App = () => {

    React.useEffect(() => console.log("Test"));

    return <div className={"App"}>
        <div className={"content"}>
            <h1>Insta Download!</h1>

            <p>Just copy your image/video and it will appear here</p>
            <input type="text"/>
            <button>Download</button>
        </div>

    </div>
};

export default App;
