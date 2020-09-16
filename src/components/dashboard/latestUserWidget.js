import React from "react";

const LatestUserWidget = (props) => {
  return (
    <div className="col-xl-6 col-lg-12 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Latest User</h5>
          <table
            className="data-table data-table-standard responsive nowrap"
            data-order='[[ 1, "desc" ]]'
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Sales</th>
                <th>Stock</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="list-item-heading">Marble Cake</p>
                </td>
                <td>
                  <p className="text-muted">1452</p>
                </td>
                <td>
                  <p className="text-muted">62</p>
                </td>
                <td>
                  <p className="text-muted">Cupcakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Fruitcake</p>
                </td>
                <td>
                  <p className="text-muted">1245</p>
                </td>
                <td>
                  <p className="text-muted">65</p>
                </td>
                <td>
                  <p className="text-muted">Desserts</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Chocolate Cake</p>
                </td>
                <td>
                  <p className="text-muted">1200</p>
                </td>
                <td>
                  <p className="text-muted">45</p>
                </td>
                <td>
                  <p className="text-muted">Desserts</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Bebinca</p>
                </td>
                <td>
                  <p className="text-muted">1150</p>
                </td>
                <td>
                  <p className="text-muted">4</p>
                </td>
                <td>
                  <p className="text-muted">Cupcakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Napoleonshat</p>
                </td>
                <td>
                  <p className="text-muted">1050</p>
                </td>
                <td>
                  <p className="text-muted">41</p>
                </td>
                <td>
                  <p className="text-muted">Cakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Magdalena</p>
                </td>
                <td>
                  <p className="text-muted">998</p>
                </td>
                <td>
                  <p className="text-muted">24</p>
                </td>
                <td>
                  <p className="text-muted">Cakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Salzburger Nockerl</p>
                </td>
                <td>
                  <p className="text-muted">924</p>
                </td>
                <td>
                  <p className="text-muted">20</p>
                </td>
                <td>
                  <p className="text-muted">Desserts</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Soufflé</p>
                </td>
                <td>
                  <p className="text-muted">905</p>
                </td>
                <td>
                  <p className="text-muted">64</p>
                </td>
                <td>
                  <p className="text-muted">Cupcakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Cremeschnitte</p>
                </td>
                <td>
                  <p className="text-muted">845</p>
                </td>
                <td>
                  <p className="text-muted">12</p>
                </td>
                <td>
                  <p className="text-muted">Desserts</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Cheesecake</p>
                </td>
                <td>
                  <p className="text-muted">830</p>
                </td>
                <td>
                  <p className="text-muted">36</p>
                </td>
                <td>
                  <p className="text-muted">Desserts</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Gingerbread</p>
                </td>
                <td>
                  <p className="text-muted">807</p>
                </td>
                <td>
                  <p className="text-muted">21</p>
                </td>
                <td>
                  <p className="text-muted">Cupcakes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="list-item-heading">Goose Breast</p>
                </td>
                <td>
                  <p className="text-muted">795</p>
                </td>
                <td>
                  <p className="text-muted">9</p>
                </td>
                <td>
                  <p className="text-muted">Cupcakes</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestUserWidget;
