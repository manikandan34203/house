import React, { useState } from 'react';
// import StaffPage from './StaffPage';
import StudentPage from './StudentPage';
// import CoursesPage from './CoursesPage';
// import { FaTh } from 'react-icons/fa';
// import AvailableCourses from './AvailableCourses';
// import RegisteredStaff from './RegisteredStaff';
// import RegisteredStudents from './RegisteredStudents';
// import FeedbacksReceived from './FeedbacksReceived';
// import FeedbackManagement from './FeedbackManagement';
import StaffChart from './StaffChart';
import StudentChart from './StudentChart';
import CourseChart from './CourseChart';
import PaymentManagement from './PaymentManagement';
//import './CSS/AdminDashboard.css'; // Import the CSS file for styling
// import BecomeTutorManagement from './BecomeTutorManagement';
// import RequestTutorManagement from './RequestTutorManagment';

const AdminDashboard = () => {
  const [activeChart, setActiveChart] = useState('overview');

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
        <br>
        </br>
          <li onClick={() => setActiveChart('overview')}>Overview</li>
          <li onClick={() => setActiveChart('student')}>student Enrollments</li>
          <li onClick={() => setActiveChart('payment')}>Payment Management</li>
        </ul>
      </div>
      <div className="content">
        <h1>Admin Dashboard</h1>
        <br/><br/>
        {activeChart === 'overview' && (
          <div className="overview-section">
            {/* <div className="modules-section">
              <AvailableCourses />
              <RegisteredStaff />
              <RegisteredStudents />
              <FeedbacksReceived />
            </div> */}
            <div className="chart-container">
        <h2>User Registrations</h2>
        <StaffChart />
      </div>
      <div className="chart-container">
        <h2>Owner Enrollments</h2>
        <StudentChart />
      </div>
      <div className="chart-container1">
        <h2>Property Distribution</h2>
        <CourseChart />
      </div>
          </div>
        )}
        {activeChart === 'student' && (
          <div>
            <h2>User Enrollments</h2>
            <StudentPage />
          </div>
        )}
         {activeChart === 'payment' && (
          <div>
            <PaymentManagement />
          </div>
        )}
      </div>
    </div>
  );

};
export default AdminDashboard;