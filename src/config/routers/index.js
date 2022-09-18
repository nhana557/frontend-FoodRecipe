import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../../components/module/home/Home"
import Profile from "../../pages/Profile"
import DetailVideoRecipe from "../../pages/DetailVideoRecipe"
import AddRecipe from "../../components/module/home/addrecipe/AddRecipe"
import DetailRecipe from "../../pages/DetailRecipe"
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import ForgotPassword from "../../pages/auth/ForgotPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/detailVideoRecipe" element={<DetailVideoRecipe/>} />
        <Route path="/addRecipe" element={<AddRecipe/>} />
        <Route path="/detailRecipe" element={<DetailRecipe/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default Router;
