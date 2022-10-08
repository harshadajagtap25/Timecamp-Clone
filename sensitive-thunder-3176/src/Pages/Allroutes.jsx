import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Bookdemo from "./Bookdemo";
import FinalHome from "./Home/FinalHome";
import Login from "./Login/Login";
import TimeSide from "./TimeSheet/TimeSide";
import TimeSheet from "./TimeSheet/TimeSheet";
import Dashboard from "./TimeSheet/Dashboard";
import Reports from "./TimeSheet/Reports";
import Computer from "./TimeSheet/Computer";
import Projects from "./TimeSheet/Projects";
import Tags from "./TimeSheet/Tags";
import Users from "./TimeSheet/Users";
import Attendance from "./TimeSheet/Attendance";
import Approvals from "./TimeSheet/Approvals";
import Clients from "./TimeSheet/Clients";
import Invoices from "./TimeSheet/Invoices";
import Finalinte from "./Integration/Finalinte";
import FinalFeature from "./Feature/FinalFeature";
import Finalprice from "./Pricing/Finalprice";
import AuthReq from "./Login/AuthReq";
import Logout from "./Login/Logout";
import Signin from "./SignIn/Signin";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FinalHome />}></Route>
        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/pricing" element={<Finalprice />}></Route>
        <Route path="/integration" element={<Finalinte />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bookdemo" element={<Bookdemo />}></Route>
        <Route
          path="/blog"
          element={
            <AuthReq>
              <Blog />
            </AuthReq>
          }
        ></Route>
        <Route path="/Logout" element={<Logout />}></Route>
        <Route path="/timesheet" element={<TimeSide />}></Route>

        <Route path="/timesheet/timesheet" element={<TimeSheet />}></Route>
        <Route path="/timesheet/dashboard" element={<Dashboard />}></Route>
        <Route path="/timesheet/reports" element={<Reports />}></Route>
        <Route path="/timesheet/computertime" element={<Computer />}></Route>
        <Route path="/timesheet/projects" element={<Projects />}></Route>
        <Route path="/timesheet/tags" element={<Tags />}></Route>
        <Route path="/timesheet/users" element={<Users />}></Route>
        <Route path="/timesheet/attendance" element={<Attendance />}></Route>
        <Route path="/timesheet/approvals" element={<Approvals />}></Route>
        <Route path="/timesheet/clients" element={<Clients />}></Route>
        <Route path="/timesheet/invoices" element={<Invoices />}></Route>
      </Routes>
    </>
  );
};

export default Allroutes;
