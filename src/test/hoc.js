// Higher Order Component - component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (      // this is AdminInfo component
        <div>
            {props.isAdmin === false && <p>This is private info, please don't share.</p>}
            <WrappedComponent {...props} />     {/* this is Info component. taking props and passing them down to children*/}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated === true && <WrappedComponent {...props} />}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Here are the details" isAdmin={false} />, document.getElementById("app"));
ReactDOM.render(<AuthInfo info="Here are the details" isAuthenticated={true} />, document.getElementById("app"));