import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <div style={{minHeight: "200px", margin: "auto"}}>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
      </div>
      <div style={{minHeight: "275px", margin: "auto"}}>
        <Card.Body>
          <Link to={`/product/${product._id}`}></Link>
          <Card.Title as="div">
            <h4>{product.name}</h4>
          </Card.Title>
          <Card.Text as="div">{product.description}</Card.Text>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3"> ${product.price}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Product;
