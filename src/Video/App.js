import { forwardRef, useRef, useImperativeHandle} from "react"

function App(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(
      ref,
      () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
      }),
    )
    return (
        <video 
            ref={videoRef}
            src="https://v16-webapp.tiktok.com/8303c439e228783f63dd094c3edf94a6/6344300a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f132ab018b6e44f69768d9e5ef3ad6b5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1286&bt=643&cs=0&ds=3&ft=WgGbvNM6VQ9wUh9221W.CSpxatk3hdxwiPg_Krl8eC_O&mime_type=video_mp4&qs=0&rc=aWhoPDg0Z2hlNGg7OmRkNUBpamVkdjQ6ZjluZjMzZjgzM0AuYS9fLjBhNTQxYmI0XzMwYSNgNWJycjRnZm5gLS1kL2Nzcw%3D%3D&l=20221010084339010245158225240BDA5A&btag=80000"
            width={280}
            controls
        />
    )
}

export default forwardRef(App)