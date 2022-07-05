import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/RecipesGrid.css";
import crackedEgg from "../../images/crackedEgg.gif";
import sunny from "../../images/recipes/Sunny.jpg";
// import timer from "../../images/timer.svg";
// import { BiTimer } from "react-icons/bi";

function RecipesGrid() {
  //State to show the alerts card on button click
  // const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  //State to show the nb of alerts on the button
  // const [nbAlerts, setNbAlerts] = useState(0);

  const recipes = [
    {
      id: 1,
      name: "sunny",
      time: "1",
      description: "Met at a party.",
    },
    {
      id: 2,
      name: "sunny",
      time: "2",
      description: "Met at a party.",
    },
    {
      id: 3,
      name: "sunny",
      time: "6",
      description: "Met at a party.",
    },
    {
      id: 4,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 5,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 6,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 7,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 8,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 9,
      name: "sunny",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
  ];

  return (
    <div className="RecipesGrid">
      <header>
        <Link id="link" to="/">
          <img id="img1" className="Gif" src={crackedEgg} />
        </Link>
      </header>
      <Container>
        <Row>
          {recipes.map((recipe) => (
            <Col key={recipe.id} xs={12} md={4}>
              <Link id="link" to={`/recipes/${recipe.id}`}>
                <Card>
                  <Card.Header>
                    {/* <BiTimer id="timer" />  */}
                    {recipe.time} mins
                  </Card.Header>
                  <Card.Img variant="top" src={sunny} />
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
