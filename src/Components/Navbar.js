import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAuth } from "../Actions";
function Navbar() {
  const navigate = useNavigate();
  const [Toogle, EffectToogle] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((list) => list.ItemsInArray);
  useEffect(() => {}, [list]);

  console.log(list, "Data is fetched bro");
  return (
    <>
      <div className="container-fluid p-0">
        {" "}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="sidelogo">
            <a href="#">
              <img
                class="logoImage"
                src="https://www.pinclipart.com/picdir/big/569-5690863_small-house-png-image-transparent-background-png-format.png"
              />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div className="navbarrightSideIcons d-flex ">
              <div>
                <div className="dropdown dropstart">
                  <button
                    className="btn btn-light dropdown-toggle  dropdown-toggle-split "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => EffectToogle(!Toogle)}
                  >
                    <i class="fa fa-bell" aria-hidden="true"></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{
                      maxHeight: "240px",
                      overflowY: "auto",
                      overflowX: "auto",
                    }}
                  >
                    {list.length > 0 ? (
                      list.map((index) => {
                        return (
                          <div>
                            <li>
                              <button
                                class="dropdown-item d-flex justify-content-between"
                                type="button"
                              >
                                <p>
                                  {index.data?.tittle ? (
                                    <p>{index.data.tittle} </p>
                                  ) : (
                                    "Undefined"
                                  )}{" "}
                                </p>{" "}
                                <p className="fw-bold">{index.Pack}</p>{" "}
                              </button>
                            </li>
                          </div>
                        );
                      })
                    ) : (
                      <p>No Record Found</p>
                    )}
                    {/*    
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li> */}
                  </ul>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    dispatch(LoginAuth(""));
                    navigate("/login");
                  }}
                  className="btn btn-light "
                >
                  <i class="fa fa-sign-out mr-2" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
