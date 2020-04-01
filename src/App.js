import React from 'react';

const App = () => {

    const [imageUrl, setImageUrl] = React.useState('');

    function download(url, filename) {
        fetch(url).then(function (response) {
            return response.blob().then((blob) => {
                    var a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.setAttribute("download", filename);
                    a.click();
                }
            );
        });
    }

    return <div className={"App"}>
        <div className={"content"}>
            <h2>Insta Download!</h2>

            <label className={"label"} htmlFor={"downloadUrl"}>Just copy your image/video and it will appear
                here</label>

            <div className={"row"}>
                <input id="downloadUrl_input" type="text" onChange={(event) => setImageUrl(event.target.value)}
                       value={imageUrl}/>
                <div className={"button"}
                     onClick={() => download("https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "geoip.jpg")}>Download
                </div>
            </div>
        </div>
    </div>
};

export default App;
