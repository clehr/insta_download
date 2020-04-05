import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

const App = () => {

    const [imageUrl, setImageUrl] = React.useState('');
    const [test, setTest] = React.useState('');

    function download(url, filename) {
        fetch(url).then(function (response) {
            return response.blob().then((blob) => {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.setAttribute("download", filename);
                    a.click();
                }
            );
        });
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

            {JSON.stringify(data) != undefined && JSON.stringify(data).match(/<img.*?src="(.*?)"[^\>]+>/g)}

            <label className={"label"} htmlFor={"downloadUrl_input"}>Just copy your image/video and it will appear
                here</label>

            <div className={"row"}>
                <input id="downloadUrl_input" type="text" onChange={(event) => setImageUrl(event.target.value)}
                       value={imageUrl}/>
                <div className={"button"}
                     onClick={() => download(imageUrl, "instaDownload.jpg")}>Download
                </div>
            </div>
        </div>
    </div>
};

export default App;
