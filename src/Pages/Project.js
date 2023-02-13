import React from "react";
import Cards from "../Components/Commons/Cards";
import { projectData } from "../Components/Commons/CardsData";
import SearchBar from "../Components/Commons/SearchBar";
function Project() {
  return (
    <>
      <div
        className="scrollbar"
        id="style-2"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="row force-overflow">
       <SearchBar placeholder="Search Perfume" data={projectData} />
          <div className="row">
            {projectData.map((index) => {
              return (
                <div className="col-4 p-5">
                  <Cards
                    img={index.img}
                    tittle={index.tittle}
                    href={index.id}
                    text={index.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
