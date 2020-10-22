import React from "react";

const UserDetailWidget = (props) => {
  const rowPadding = { padding: 20, textAlign: "center" };
  const userId = { fontSize: 22 };
  const title = { fontSize: 14, fontWeight: "bold" };
  return (
    <div>
      <div className="row" style={rowPadding}>
        <div className="col-lg-4 col-md-4">
          <div className="row" style={title}>
            {props.title1} :
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="row" style={userId}>
            {props.value1}
          </div>
        </div>
        <div className="col-lg-4 col-md-4" style={{}}>
          <div className="row" style={title}>
            {props.title2} :
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="row" style={userId}>
            {props.value2}
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="row" style={title}>
            {props.title3} :
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="row" style={userId}>
            {props.value3}
          </div>
        </div>
      </div>
      <div className="separator mb-5" />
    </div>
  );
};

export default UserDetailWidget;
