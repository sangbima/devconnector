import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from './Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import PrivateRoute from '../routing/PrivateRoute';

const NonLandingPages = () => {
	return (
		<section className="container">
			<Alert />
			<Routes>
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/login" element={<Login />} />
				<Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
				<Route path="create-profile" element={<PrivateRoute component={CreateProfile} />} />
				<Route path="edit-profile" element={<PrivateRoute component={EditProfile} />} />
			</Routes>
		</section>
	);
};

export default NonLandingPages;
