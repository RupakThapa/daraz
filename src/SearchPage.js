import React, { useState } from "react";
import data from "./productdb";
import Productcard from "./Productcard";
import Single from "./Single";
import { Link } from "react-router-dom";

function SearchPage(props) {
  const searchkey = props.match.params.searchquery;
  const results = data.productdb.filter(
    (x) => x.title.toLowerCase().indexOf(searchkey) != -1
  );
  console.log(results);
  return (
    <div className="container searchsection">
      <div className="flash__title">
        <p className="flash__text">Search Results ({results.length})</p>
      </div>
      <div className="product__section">
        {results.map((item) => (
          <Link className="product__sectionLink" to={"/single/" + item._id}>
            <Productcard
              id={item._id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              ratingnos={item.ratingnos}
              discount={item.discount}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
