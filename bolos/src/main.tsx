import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from 'react-dom/client'


import './pages/styles/index.css'
import App from './pages/App.tsx'
import Contacts from "./pages/Contacts.tsx"
import AboutUs from "./pages/AboutUs.tsx";
import Quiz from "./pages/Quiz.tsx";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/home"} element={<App/>}/>
            <Route path={"/contact"} element={<Contacts/>}/>
            <Route path={"/about-us"} element={<AboutUs/>}/>
            <Route path={"/quiz"} element={<Quiz/>}/>
        </Routes>
    </BrowserRouter>
)
