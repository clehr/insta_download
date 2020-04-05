import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

const App = () => {

    const [imageUrl, setImageUrl] = React.useState('');

    function download(filename) {
        fetch(imageUrl).then(function (response) {
            return response.blob().then((blob) => {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.setAttribute("download", filename);
                    a.click();
                }
            );
        });
    }

    const setDownloadUrl = (event) => {
        const inputUrl = event.target.value
        let downloadUrl = inputUrl.substring(0, inputUrl.indexOf('?')).concat('media?size=m');
        setImageUrl(downloadUrl)

    }

    const [{ data, loading, error }, refetch] = useAxios(
        imageUrl
     )

    useEffect(() => {
        console.log("Use Effect");
    });

    return <div className={"App"}>
        <div className={"content"}>
            <h2>Insta Download!</h2>

            <label className={"label"} htmlFor={"downloadUrl_input"}>Just copy your image/video and it will appear
                here</label>

            <div className={"row"}>
                <input id="downloadUrl_input" type="text" onChange={(event) => setDownloadUrl(event)}
                       value={imageUrl}/>
                <div className={"button"}
                     onClick={() => download("instaDownload.jpg")}>Download
                </div>
            </div>

            <img src={imageUrl} />
        </div>
    </div>
};

export default App;
