import React from "react";
import '../components.css'
import { Link } from "react-router-dom";

export const PaginationComponent = ({ page, pages, keyword }) => {
    return (
        pages > 1 && (
          <ul className="pagination justify-content-center">
            {[...Array(pages).keys()].map((x) => (
              <li
                className={`page-item ${x + 1 === page ? "active" : ""}`}
                key={x + 1}
              >
                <Link
                  className="page-link"
                  to={
                    keyword
                      ? `/search/${keyword}/page/${x + 1}`
                      : `/page/${x + 1}`
                  }
                >
                  {x + 1}
                </Link>
              </li>
            ))}
          </ul>

      )
      
    );

};

