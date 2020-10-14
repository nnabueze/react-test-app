import React from "react";

const LatestUserWidget = ({ user }) => {
  return (
    <div className="col-xl-6 col-lg-12 mb-4">
      {user.currentPage}
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Latest User</h5>
          <table
            className="data-table data-table-standard responsive nowrap"
            data-order='[[ 1, "desc" ]]'
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Category</th>
                <th>Registered Date</th>
              </tr>
            </thead>
            <tbody>
              {user.data.data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <p className="list-item-heading">{item.firstName}</p>
                  </td>
                  <td>
                    <p className="text-muted">{item.lastName}</p>
                  </td>
                  <td>
                    <p className="text-muted">{item.email}</p>
                  </td>
                  <td>
                    <p className="text-muted">{item.phone}</p>
                  </td>
                  <td>
                    {item.isActive ? (
                      <span className="badge badge-pill badge-success mb-1">
                        Active
                      </span>
                    ) : (
                      <span className="badge badge-pill badge-danger mb-1">
                        Disabled
                      </span>
                    )}
                  </td>
                  <td>
                    <p className="text-muted">{item.createdDate}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestUserWidget;
