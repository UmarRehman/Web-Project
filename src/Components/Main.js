import React, { Suspense, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function Main() {
  const [sidebar, setsidebar] = useState(true);
  return (
    <>
      <div className="fullPage">
        <div className="uppercontainer">
          <div className="Navbar container-fluid p-0">
            <Navbar />
            <div
              className={sidebar ? "pin" : "closedpin"}
              onClick={() => setsidebar(!sidebar)}
            >
              <i
                className={
                  sidebar
                    ? "fa fa-arrow-left btn btn-success"
                    : " fa fa-arrow-right btn btn-success"
                }
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={sidebar ? "sidebar" : "closedSidebar"}>
            <Sidebar />
          </div>
          <div
            className="leftside scrollbar"
            id="style-2"
            style={{ height: "calc(100vh - 56px)", overflow: "auto" }}
          >
            <div className="mainFull container-fluid">
              <Suspense
                fallback={
                  <>
                    <h1>Loading .........</h1>
                  </>
                }
              >
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
