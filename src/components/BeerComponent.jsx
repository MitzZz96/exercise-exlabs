import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BeerComponent = (page) => {
  const beers = useSelector((state) => state.allBeers.beers);
  const renderBeers = beers.map((beer) => {
    const { id, image_url, name, tagline } = beer;

    return (
      <Card
        border="secondary"
        style={{ width: "18rem", margin: "10px" }}
        key={id}
        className="text-center"
      >
        <Link to={`/details/${id}`}>
          <Card.Img
            variant="top"
            src={image_url}
            style={{ width: "50px", height: "100px" }}
          />
          <Card.Body style={{ textDecoration: "none", color: "black" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{tagline}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    );
  });

  return (
    <Row lg={3} className="justify-content-center">
      {renderBeers}
    </Row>
  );
};

export default BeerComponent;
