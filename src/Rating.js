import React from "react";
import StarIcon from "@material-ui/icons/Star";
function Rating(props) {
  return (
    <div className="product__rating">
      {Array(props.ratingx)
        .fill()
        .map((_) => (
          <p>
            <StarIcon className="star" />
          </p>
        ))}
      {Array(props.noratingx)
        .fill()
        .map((_) => (
          <p>
            <StarIcon className="graystar" />
          </p>
        ))}
      ({props.ratingnos})
    </div>
  );
}

export default Rating;
