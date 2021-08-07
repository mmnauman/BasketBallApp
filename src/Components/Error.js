import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import React from "react";

const ErrorComp = React.forwardRef(
  ({ children, closeHandler, nature }, ref) => {
    return (
      <Alert
        ref={ref}
        className="ErrorComponent"
        variant={nature}
        onClose={() => closeHandler()}
        dismissible
      >
        <p>{children}</p>
      </Alert>
    );
  }
);

export default ErrorComp;
