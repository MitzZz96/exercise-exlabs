import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBeer } from "../redux/actions/beerActions";
import Card from "react-bootstrap/Card";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const BeerDetails = () => {
  const beer = useSelector((state) => state.beer);
  const [loading, setLoading] = useState(false);
  const { beerId } = useParams();
  const dispatch = useDispatch();
  const {
    tagline,
    name,
    first_brewed,
    description,
    image_url,
    brewers_tips,
    ibu,
    abv,
    contributed_by,
    ingredients,
  } = beer;

  const fetchBeerDetail = async (id) => {
    setLoading(true);
    const response = await axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .catch((err) => {
        console.log("Error: ", err);
      });

    dispatch(getBeer(response.data[0]));
    setLoading(false);
  };

  useEffect(() => {
    if (beerId && beerId !== "") fetchBeerDetail(beerId);
  }, [beerId]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Card style={{ alignItems: "center", border: "none" }}>
          <Row>
            <Col>
              <Card.Img
                src={image_url}
                style={{ width: "50%", height: "50vh" }}
              />
            </Col>
            <Col lg={8}>
              <Card.Body>
                <Card.Text>
                  <h1>{name}</h1>
                  <h3>{tagline}</h3>
                  <h3>
                    {"IBU: "}
                    {ibu}
                    {" ABV: "}
                    {abv}
                  </h3>
                  <h3>
                    {"First brewed: "}
                    {first_brewed}
                  </h3>
                  <p>{description}</p>

                  <p>{brewers_tips}</p>
                  <i>
                    {"Contributed by: "}
                    {contributed_by}
                  </i>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
};

export default BeerDetails;
