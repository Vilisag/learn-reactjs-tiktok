import Container from "./Container"
import { ThemeProvider } from "./ThemeContext"
import "./App.css"

function Content() {
    return (
        <ThemeProvider>
            <div style={{padding: 20}}>
                <Container />
            </div>
        </ThemeProvider>
    )
}

export default Content