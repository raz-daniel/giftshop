import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Home from "../../home/Home";
import Gifts from "../../gifts/Gifts";
import New from "../../new/New";


export default function Routing(): JSX.Element {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/new" element={<New />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}