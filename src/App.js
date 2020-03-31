import React from 'react';

const App = () => {

    React.useEffect(() => console.log("Test"));

    return <div className={"App"}>
        <div className={"content"}>
            <h2>Insta Download!</h2>

            <label className={"label"} htmlFor={"downloadUrl"}>Just copy your image/video and it will appear here</label>

            <div className={"row"}>
                <input id="downloadUrl_input" type="text"/>
                <a  className={"button"} href="./images/background.jpeg" download>Download</a>
            </div>
        </div>
    </div>
};

export default App;
