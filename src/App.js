import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

const App = () => {

    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    const [imageUrl, setImageUrl] = React.useState('');

    function download(filename) {
        fetch(imageUrl).then(function (response) {
            return response.blob().then((blob) => {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.setAttribute("download", filename);
                a.click();
            });
        });
    }

    function paste() {
        navigator.clipboard.readText()
            .then(text => {
                document.getElementById("downloadUrl_input").value = text;

            })
            .catch(err => {
                document.getElementById("downloadUrl_input").value = 'Failed to read clipboard contents: ' + err;
            });
    }

    function clear() {
        setImageUrl('');
    }

    const setDownloadUrl = (event) => {
        const inputUrl = event.target.value
        let downloadUrl = inputUrl.includes("?") ? inputUrl.substring(0, inputUrl.indexOf('?')).concat('media?size=m') : inputUrl;
        setImageUrl(downloadUrl)
    }

    const [{ data, loading, error }, refetch] = useAxios(
        imageUrl
    )

    return <div className={"App"}>
        <div className={"content"}>
            <h2>Insta Download!</h2>

            <label className={"label"} htmlFor={"downloadUrl_input"}>Just copy your image/video and it will appear
                here</label>

            <div className={"row"}>
                <input id="downloadUrl_input" type="text" onChange={(event) => setDownloadUrl(event)}
                    value={imageUrl} />

                {
                    isChrome ? <div className={"button"}
                        onClick={() => paste()}>Paste
                    </div>
                        :
                        <div className={"button"}
                            onClick={() => clear()}>Clear
                    </div>
                }

                <div className={"button"}
                    onClick={() => download("instaDownload.jpg")}>Download
                </div>
            </div>

            <div>
                <img src={imageUrl} />
            </div>
        </div>
    </div>
};

export default App;
