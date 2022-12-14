import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <section>
            <Helmet>
                <title>Dashboard - Digitaz LTD.</title>
            </Helmet>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side z-0">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content font-bold">

                        <li><Link to="/dashboard/profile">My Profile</Link></li>

                        {
                            admin && <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/review">Add A Review</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/orders">Manage All Orders</Link></li>
                        }

                        {
                           admin && <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </section>
    )
};

export default Dashboard;