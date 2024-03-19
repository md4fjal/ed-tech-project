import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/layout/header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PageNoteFound from './components/layout/PageNotFound/PageNoteFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFailed from './components/Payments/PaymentFailed';
import CoursePage from './components/CouseDetail/CoursePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import CreateCourses from './components/Admin/CreateCourses/CreateCourses';

// admin routes

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/request" element={<Request />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="*" element={<PageNoteFound />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/admincourses" element={<AdminCourses />} />
        <Route path="/admin/createcourses" element={<CreateCourses />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
