import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Searchx() {
  const [searchvalue, setSearchvalue] = useState("");

  function changeValue(e) {
    setSearchvalue(e.target.value);
  }

  return (
    <div className="searchgroup">
      <input
        onChange={changeValue}
        type="text"
        value={searchvalue}
        className="header__search"
      />
      <Link className="product__sectionLink" to={"/searchpage/" + searchvalue}>
        {" "}
        <SearchIcon className="header__searchicon" />
      </Link>
    </div>
  );
}

export default Searchx;
