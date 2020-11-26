import React from "react";
import Footer from "../../shared/footer";
import Menu from "../../shared/menu";
import TopNav from "../../shared/topNav";
import ReportWidget from "./reportWidget";

const Report = () => {
  return (
    <div>
      <TopNav />
      <Menu />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Report</h1>
              </div>

              <div className="separator mb-5" />
              <ReportWidget />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
