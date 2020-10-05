import React from "react";

const AlertNotice = ({ message, isNotError, isError }) => {
  return (
    <div>
      {isNotError && (
        <div
          className="alert alert-primary alert-dismissible fade show rounded mb-0"
          role="alert"
        >
          <strong>Success !&nbsp;&nbsp;</strong> {message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {isError && (
        <div
          className="alert alert-warning alert-dismissible fade show rounded mb-0"
          role="alert"
        >
          <strong>Error !&nbsp;&nbsp;</strong> {message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertNotice;
