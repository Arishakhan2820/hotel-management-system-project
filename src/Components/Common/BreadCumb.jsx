import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router";

const BreadCumb = ({Title,bgimg}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <section className="breadcrumb-wrapper fix bg-cover" data-background={bgimg}>
      <div className="container">
          <div className="row">
              <div className="page-heading">
                  <h2>{Title}</h2>
                  <ul className="breadcrumb-list">
                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li><i className="bi bi-chevron-double-right"></i></li>
                      <li>{Title}</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>


    );
};

export default BreadCumb;