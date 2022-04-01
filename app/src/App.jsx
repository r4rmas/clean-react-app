import {
    BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

function Home() {
    return (
        <h1>HOME</h1>
    )
}

function Login() {
    return (
        <h1>LOGIN</h1>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={Home()} />
                <Route path='login' element={Login()} />
            </Routes>
        </BrowserRouter>
    )
}

export default App