import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getAllUsers } from "../../services/AdminService";

const LatestUserWidget = (props) => {
  const [itemList, setItemList] = useState([]);

  const { auth } = useContext(AuthContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        setToken(auth.data.token);
      } else {
        window.location = "/";
      }
    }
  }, [auth]);

  useEffect(() => {
    if (token !== "") {
      const tokenParam = {
        access: token,
      };
      async function callGetUser() {
        const response = await getAllUsers(tokenParam);
        setItemList([...response.data]);
      }

      try {
        callGetUser();
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  const navigatePage = (id) => {
    window.location = `/user-details?id=${id}`;
  };

  return (
    <div className="col-xl-12 col-lg-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {itemList.map((item, index) => (
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
                  <td>
                    <Link onClick={() => navigatePage(item.id)}>
                      <div className="glyph">
                        <div
                          style={{ fontSize: 25 }}
                          className="glyph-icon iconsminds-align-justify-all"
                        ></div>
                        {/* <div style={{ fontSize: 10 }} className="class-name">
                        view
                      </div> */}
                      </div>
                    </Link>
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
