import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import Subscribe from './components/Payment/Subscribe';
import PaymentFail from './components/Payment/PaymentFail';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import NotFound from './components/Layout/NotFound/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import DashBoard from './components/Admin/DashBoard/DashBoard';
import CreateCourses from './components/Admin/CreateCourses/CreateCourses.jsx';
import AdminUsers from './components/Admin/Users/AdminUsers.jsx';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses.jsx';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfailed" element={<PaymentFail />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        {/* admin routes */}
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/admin/createcourse" element={<CreateCourses />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/courses" element={<AdminCourses />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
