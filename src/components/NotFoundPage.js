import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <>
        <h1>404 - Page Not Found</h1>
        <Link to="/" replace={false}>Back to Dashboard</Link>
    </>
);

export default NotFoundPage;
