<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Employee Management Web App - Features</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 2rem;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
    }
    h2 {
      color: #34495e;
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.3rem;
    }
    ul {
      margin-bottom: 2rem;
      line-height: 1.7;
    }
    li {
      margin: 0.3rem 0;
    }
    .container {
      max-width: 900px;
      margin: auto;
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Employee Management Web App</h1>

    <h2>1. Project Setup</h2>
    <ul>
      <li>Create .NET 9 backend project</li>
      <li>Setup Angular frontend project</li>
    </ul>

    <h2>2. Department Management</h2>
    <ul>
      <li>Add departments</li>
      <li>Edit departments</li>
      <li>Delete departments</li>
    </ul>

    <h2>3. Employee Management</h2>
    <ul>
      <li>View employee list (name, email, phone, job title, etc.)</li>
      <li>Add new employee</li>
      <li>Edit employee details</li>
      <li>Delete employees</li>
      <li>Search employees</li>
    </ul>

    <h2>4. User Authentication & Roles</h2>
    <ul>
      <li>Login & Logout (Admin & Employee)</li>
      <li>Role-based access control (Admin vs Employee)</li>
      <li>Change password</li>
    </ul>

    <h2>5. Profile Management</h2>
    <ul>
      <li>Update profile details</li>
      <li>Change profile picture</li>
    </ul>

    <h2>6. Search and Pagination</h2>
    <ul>
      <li>Search functionality</li>
      <li>Pagination for lists</li>
    </ul>

    <h2>7. Leave Management</h2>
    <ul>
      <li>Apply for leave (date, reason)</li>
      <li>Admin can approve/reject leave requests</li>
    </ul>

    <h2>8. Attendance Management</h2>
    <ul>
      <li>Mark attendance</li>
      <li>View attendance history</li>
      <li>Monthly attendance report</li>
    </ul>

    <h2>9. Payroll Management (Basic)</h2>
    <ul>
      <li>Set salary details for employees</li>
      <li>View salary history</li>
      <li>Generate simple salary slip</li>
    </ul>

    <h2>10. Reports & Dashboard</h2>
    <ul>
      <li>Employee count</li>
      <li>Department count</li>
      <li>Total salary expense (monthly)</li>
      <li>Department-wise employee count</li>
      <li>Employees on leave today</li>
    </ul>
  </div>
</body>
</html>
