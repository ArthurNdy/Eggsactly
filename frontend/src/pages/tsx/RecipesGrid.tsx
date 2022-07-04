import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/RecipesGrid.css";
import crackedEgg from "../../images/crackedEgg.gif";

function RecipesGrid() {
  //State to show the alerts card on button click
  // const [showAlerts, setShowAlerts] = useState(false);
  //State to show the date at the top of the main table
  //State to show the nb of alerts on the button
  // const [nbAlerts, setNbAlerts] = useState(0);

  const recipes = [
    {
      id: 1,
      name: "John",
      time: "1",
      description: "Met at a party.",
    },
    {
      id: 2,
      name: "Mary",
      time: "2",
      description: "Met at a party.",
    },
    {
      id: 3,
      name: "Jane",
      time: "6",
      description: "Met at a party.",
    },
    {
      id: 4,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 5,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 6,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 7,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 8,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
    {
      id: 9,
      name: "Jane",
      time: "6",
      company: "Some Company, Inc",
      description: "Met at a party.",
    },
  ];

  return (
    <div className="RecipesGrid">
      <img className="Gif" src={crackedEgg} />
      <Container fluid>
        <Row xs={3}>
          {recipes.map((person) => (
            <Col key={person.id}>
              {/* <Card person={person} /> */}
              <Link to="/">
                <Card>
                  <Card.Header>{person.time}</Card.Header>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Text>{person.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <img className="Gif" src={crackedEgg} />
    </div>
  );
}

export default RecipesGrid;
