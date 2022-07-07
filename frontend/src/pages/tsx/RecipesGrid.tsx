import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/RecipesGrid.css";
import crackedEgg from "../../images/crackedEgg.gif";

import Axios from "axios";
// import timer from "../../images/timer.svg";
// import { BiTimer } from "react-icons/bi";

function RecipesGrid() {
  //State to show the alerts card on button click
  // const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  //State to show the nb of alerts on the button
  // const [nbAlerts, setNbAlerts] = useState(0);

  interface recipe {
    id: number;
    name: string;
    cooking_time: number;
    description: string;
  }

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //List of the events of a patient for one day
    Axios.get("http://localhost:8000/daily").then((response) => {
      //Set list of the events of a patient for one day
      setRecipes(response.data);
      console.log(recipes);
    });
  }, []);

  return (
    <div className="RecipesGrid">
      <header>
        <Link id="link" to="/">
          <img id="img1" className="Gif" src={crackedEgg} />
        </Link>
      </header>
      <Container>
        <Row>
          {recipes.map((recipe: recipe) => (
            <Col key={recipe.id} xs={12} md={4}>
              <Link id="link" to={`/recipes/${recipe.id}`}>
                <Card>
                  <Card.Header>
                    {/* <BiTimer id="timer" />  */}
                    {recipe.cooking_time} mins
                  </Card.Header>
                  <Card.Img
                    variant="top"
                    src={require(`../../images/recipes/${
                      recipe.name.split(" ")[0]
                    }.jpg`)}
                  />
                  <Card.Body>
                    <Card.Text>{recipe.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <footer>
        <Link id="link" to="/">
          <img id="img2" className="Gif" src={crackedEgg} />
        </Link>
      </footer>
    </div>
  );
}

export default RecipesGrid;
