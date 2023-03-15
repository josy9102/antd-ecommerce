import { Routes, Route } from "react-router";
import { Category, Home } from "../../../pages/components";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:categoryId' element={<Category />}></Route>
    </Routes>
}

export default AppRoutes;