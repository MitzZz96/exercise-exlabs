import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getBeers } from "../redux/actions/beerActions";
import BeerComponent from "./BeerComponent";

const BeerList = () => {
  const beers = useSelector((state) => state.allBeers.beers);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchBeers = async () => {
    setLoading(true);
    const response = await axios
      .get(`https://api.punkapi.com/v2/beers?page=1&per_page=12`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(getBeers(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <BeerComponent />
      )}
    </>
  );
};

export default BeerList;
