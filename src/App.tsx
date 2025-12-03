import { GlobalStyle } from "./styles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}