import {
    BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import Presentation from './pages/Presentation'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Presentation /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App