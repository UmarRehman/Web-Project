import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { sidebarData } from "./sidebarData/sidebarData";
function Sidebar() {
  const [active, setactive] = useState("");
  return (
    <>
      <div className="container text-start p-0 sidebarmaindiv">
        <div>
          <ul style={{ padding: "15px" }}>
            {sidebarData.map((sidebar) => {
              return (
                <li className="text-success fw-bold" key={sidebar.tittle}>
                  <button
                    style={{ fontFamily: "Lucidatypewriter, monospace;" }}
                    className="btn btn-warning fw-bold container-fluid mt-2 "
                    onClick={() => setactive(sidebar.id)}
                  >
                    {sidebar.tittle}
                  </button>
                  <ul className="p-0">
                    {active === sidebar.id &&
                      sidebar.data.map((datamap) => {
                        return (
                          <Link
                            to={datamap.path}
                            style={{ width: "100%", marginTop: "5px" }}
                            className="btn btn-primary p-2"
                          >
                            <span className="m-1">
                              <i
                                className={datamap.icon}
                                aria-hidden="true"
                              ></i>
                            </span>
                            {datamap.name}
                          </Link>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
