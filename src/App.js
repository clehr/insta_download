import React from 'react';

const App = () => {

    React.useEffect(() => console.log("Test"));

    return <div className={"App"}>
        <div className={"content"}>
            <h1>Insta Download!</h1>

            <label className={"label"} htmlFor={"downloadUrl"}>Just copy your image/video and it will appear here</label>

            <div className={"row"}>
                <input id="downloadUrl" type="text"/>
                <a className={"button"} href={"./"}>Download</a>
            </div>
        </div>
    </div>
};

export default App;
