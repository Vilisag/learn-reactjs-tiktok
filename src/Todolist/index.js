import App from "./App"
import {StoreProvider} from "./store"

function Todolist() {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    )
}

export default Todolist