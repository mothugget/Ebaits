import { useEffect, useRef } from "react"





export default function UploadWidget(props) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    const myCloudName = process.env.REACT_APP_CLOUD_DOMAIN
    const myUploadPreset = process.env.REACT_APP_ULOAD_PRESET

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: myCloudName,
            uploadPreset: myUploadPreset
        }, function (error, result) {
            error && console.log('Image upload error: ', error);
            (result.event==='success')&&props.setImageURL(result.info.url);
        })
    }, []);

    return (
        <button className="" onClick={() => widgetRef.current.open()} >
            Upload image
        </button>
    )
}

//got help from https://www.youtube.com/watch?v=paiO6M2wBqE