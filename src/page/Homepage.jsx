import React from "react";
import {Link,useNavigate} from "react-router-dom"

const Homepage = () => {
	const navigate = useNavigate()
const goproductpage=()=>{
	navigate('/products?q=pants')	

}

  return (
    <div>
      <h1>Homepage</h1>
	  <Link to="/about">go to about page</Link>
	  <button onClick={goproductpage}>go to product page</button>
    </div>
  );
};

export default Homepage;
