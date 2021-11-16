import React, { useState } from "react";
import { storage } from "../firebase1";
function Upload() {
    const [url, setUrl] = useState("");
    const handleChange = e => {
        if (e.target.files[0]) {
            const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(e.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url);
                        });
                }
            );
        }
    };

    return (
        <div>
            <input type='file' onChange={handleChange}></input>
            <br />
            <img style={{ width: '100px' }} src={url || "https://firebasestorage.googleapis.com/v0/b/anhvu-window.appspot.com/o/images%2F300.png?alt=media&token=d9b3f3b3-a9cb-4007-96ec-168f00ceb4a1"} alt="firebase" />
            <input type='hidden' name='imgUrl' value={url} />
        </div>
    );
};
export default Upload;