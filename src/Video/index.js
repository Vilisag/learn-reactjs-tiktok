import { useRef } from "react"
import App from "./App"

function Video() {
    const videoRef = useRef()
    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }
    return (
        <div style={{padding: 20}}>
            <App ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default Video