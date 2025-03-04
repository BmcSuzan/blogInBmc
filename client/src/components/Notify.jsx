import React from "react";
import { Alert } from "react-bootstrap";
const Notify = ({ variant = "danger", msg }) => {
  return (
    <>
      <Alert
        variant={variant}
        style={{ textAlign: "center", fontWeight: "900", color: "red" }}
      >
        {msg}
      </Alert>
    </>
  );
};

export default Notify;
