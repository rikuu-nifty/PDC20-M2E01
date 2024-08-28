import React from 'react';
import './adminpanel.css'; // Import the external CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPanel({user}) {
    return (
        <div className="container mt-5">
            {user.isAdmin ? (
                <div className="card p-4">
                    <h1 className="dashboard-title">Admin Dashboard</h1>
                    <p className="text-success">Welcome, {user.name}! You have admin privileges.</p>
                    <div className="dashboard-buttons">
                        <button className="btn btn-primary">Add New Users</button>
                        <button className="btn btn-secondary">Manage Users</button>
                        <button className="btn btn-warning">Manage Settings</button>
                        <button className="btn btn-info">View Reports</button>
                    </div>
                </div>
            ) : (
                <div className="card p-4">
                    <h1 className="dashboard-title">Guest Dashboard</h1>
                    <p className="text-danger">Welcome, {user.name}! You are not an admin.</p>
                    <div className="dashboard-buttons">
                        <button className="btn btn-primary">Update Profile Information</button>
                        <button className="btn btn-secondary">Settings</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
