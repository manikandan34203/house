import React, { useState, useEffect } from 'react';
import '../Assets/StudentPage.css'; // Import CSS for styling
import StudentsCount from './StudentsCount';

const StudentPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newStudent, setNewStudent] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone_number: '',
    gender: '',
    password: '',
    preferred_subject: '',
    preferred_place: '',
    city: '',
    locality: '',
    address: '',
    yearofbirth: '',
    contact_via: ''
  });
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]); // State for filtered students
  const [sortCategory, setSortCategory] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [editingStudentIndex, setEditingStudentIndex] = useState(null); // Index of student to update

  // Initialize filteredStudents when students or sortCategory changes
  useEffect(() => {
    if (sortCategory === '') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(student => student.preferred_subject === sortCategory));
    }
  }, [students, sortCategory]);

  // Calculate counts for StudentsCount
  const totalCount = students.length;
  const subjectCounts = students.reduce((acc, student) => {
    acc[student.preferred_subject] = (acc[student.preferred_subject] || 0) + 1;
    return acc;
  }, {});

  const handleAddClick = () => setIsAdding(!isAdding);

  const handleUpdateClick = () => {
    if (selectedStudents.length === 1) {
      const index = selectedStudents[0];
      setEditingStudentIndex(index);
      setNewStudent(students[index]);
      setIsUpdating(true);
      setIsAdding(true); // Show form for update
    } else {
      alert('Please select exactly one student to update.');
    }
  };

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (
      !newStudent.FirstName ||
      !newStudent.LastName ||
      !newStudent.email ||
      !newStudent.phone_number ||
      !newStudent.gender ||
      !newStudent.preferred_subject ||
      !newStudent.preferred_place ||
      !newStudent.city ||
      !newStudent.locality ||
      !newStudent.address ||
      !newStudent.yearofbirth ||
      !newStudent.contact_via
    ) {
      alert('Please fill out all fields.');
      return;
    }

    if (isUpdating) {
      // Update student
      const updatedStudents = students.map((student, index) =>
        index === editingStudentIndex ? newStudent : student
      );
      setStudents(updatedStudents);
      setEditingStudentIndex(null);
      setIsUpdating(false);
    } else {
      // Add new student
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
    }

    // Reset form and hide dropdown
    setNewStudent({
      FirstName: '',
      LastName: '',
      email: '',
      phone_number: '',
      gender: '',
      password: '',
      preferred_subject: '',
      preferred_place: '',
      city: '',
      locality: '',
      address: '',
      yearofbirth: '',
      contact_via: ''
    });
    setIsAdding(false);
  };

  const handleSort = (e) => {
    const category = e.target.value;
    setSortCategory(category);
  };

  const handleCheckboxChange = (index) => {
    setSelectedStudents((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRemove = () => {
    const updatedStudents = students.filter((_, index) => !selectedStudents.includes(index));
    setStudents(updatedStudents);
    setSelectedStudents([]);
  };

  return (
    <div className="student-page">
      <StudentsCount
        totalCount={totalCount}
        mathematicsCount={subjectCounts['Mathematics'] || 0}
        englishCount={subjectCounts['English'] || 0}
        biologyCount={subjectCounts['Biology'] || 0}
        economicsCount={subjectCounts['Economics'] || 0}
        computerScienceCount={subjectCounts['Computer Science'] || 0}
      />
      <br /><br />
      <button onClick={handleAddClick}>
        {isAdding ? (isUpdating ? 'Cancel Update' : 'Cancel') : (isUpdating ? 'Cancel Update' : 'Add New Student')}
      </button>
      <button onClick={handleUpdateClick} disabled={selectedStudents.length !== 1}>
        Update Student
      </button>
      <button onClick={handleRemove} disabled={selectedStudents.length === 0}>
        Remove Student
      </button>
      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            name="Property Name"
            value={newStudent.FirstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="BHK"
            value={newStudent.LastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="Square Feet"
            value={newStudent.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="Bathroom_Avalable"
            value={newStudent.phone_number}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <select
            name="Floor"
            value={newStudent.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="About pro"
            value={newStudent.preferred_subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Preferred Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="English">English</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Economics">Economics</option>
          </select>
          <select
            name="Avail_for"
            value={newStudent.preferred_place}
            onChange={handleChange}
            required
          >
            <option value="">Select Preferred Place</option>
            <option value="Tutors Place">Tutors Place</option>
            <option value="Students Place">Students Place</option>
            <option value="Online">Online</option>
          </select>
          <select
            name="Location"
            value={newStudent.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
          <input
            type="text"
            name="locality"
            value={newStudent.locality}
            onChange={handleChange}
            placeholder="Locality"
            required
          />
          <input
            type="text"
            name="Maintanence"
            value={newStudent.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            type="number"
            name="LeaseType"
            value={newStudent.yearofbirth}
            onChange={handleChange}
            placeholder="Year of Birth"
            required
          />
          <select
            name="Balcony"
            value={newStudent.contact_via}
            onChange={handleChange}
            required
          >
            <option value="">Select Contact Via</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>
          <input
            type="password"
            name="Image"
            value={newStudent.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">{isUpdating ? 'Update Student' : 'Add Student'}</button>
        </form>
      )}
      <div className="sort-controls">
        <select
          value={sortCategory}
          onChange={handleSort}
          className="sort-dropdown"
        >
          <option value="">Filtered By Your Users</option>
          <option value="Mathematics">Booked</option>
          <option value="English">Just Viewed</option>
          <option value="Biology">Registered</option>
          <option value="Computer Science">Owner</option>
          <option value="Economics">Properties Added</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Amount</th>
            <th>BHK</th>
            <th>Square Feet</th>
            <th>Furnished Details</th>
            <th>Bathroom_avail</th>
            <th>Floor_avail</th>
            <th>About_Property</th>
            <th>Avail_for</th>
            <th>Location</th>
            <th>locality</th>
            <th>Maintanence</th>
            <th>Balcony</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{index + 1}</td>
              <td>{student.FirstName}</td>
              <td>{student.LastName}</td>
              <td>{student.email}</td>
              <td>{student.phone_number}</td>
              <td>{student.gender}</td>
              <td>{student.preferred_subject}</td>
              <td>{student.preferred_place}</td>
              <td>{student.city}</td>
              <td>{student.locality}</td>
              <td>{student.address}</td>
              <td>{student.yearofbirth}</td>
              <td>{student.contact_via}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
