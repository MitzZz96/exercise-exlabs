import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeerDetails from "./components/BeerDetails";
import BeerList from "./components/BeerList";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container className="text-center">
          <Header />
          <Routes>
            <Route path="/" exact element={<BeerList />} />
            <Route path="/details/:beerId" exact element={<BeerDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
