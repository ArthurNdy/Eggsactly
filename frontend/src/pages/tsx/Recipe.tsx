import React from "react";
import "../css/Recipe.css";
// import { useParams } from "react-router";
import crackedEgg from "../../images/crackedEgg.gif";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import recipe_image from "../../images/recipes/Omelette.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { GiNotebook } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";

function Recipe() {
  //   const { id } = useParams();
  const recipe = {
    id: 1,
    name: "Omelette",
    time: "0,5",
    definition:
      "An omelette is made with beaten eggs that are folded around a filling while they cook",
    cookware: "Skillet (Poêle)",
    heat: "High",
    preparation:
      "Whisk the eggs: In a small bowl, crack the eggs. With a fork, whisk vigorously together with the kosher salt, pepper and water. Melt the butter: Heat a small 8-inch or 10-inch nonstick skillet over just below high heat, with the pan handle facing towards you. Add the butter and swirl the pan to fully coat. Wait until the butter starts to become foamy with large bubbles but not yet browned, then pour in eggs. Cook the omelette (0 to 15 seconds): When a skin just starts to form after 10 to 15 seconds, add the cheese (and other filling ingredients) in a line from left to right. Working quickly, run a small spatula under the far edge of the omelette to release it from the pan. Start to pull the eggs up and shake and tilt the pan to spread out any uncooked egg and allow it to cook. Using the spatula, roll the eggs up and over the cheese; this will be intentionally messy! Cook the omelette (15 to 30 seconds): Cook another 10 to 15 seconds until just barely set; the outside should be a pale golden and the inside soft and creamy. For a harder cooked omelette, cook several seconds longer. Turn off the heat. Flip the omelette onto a plate: To remove the omelette, hold a plate in one hand. Then pick up the pan with your right hand, thumb up, and quickly turn the pan upside down over the plate so that the omelette rolls off onto the middle of the plate, folding over itself into a rolled shape. Serve immediately.",
    details: "N/A",
  };

  return (
    <div className="Recipe">
      <header>
        <Link id="link" to="/recipes">
          <BsArrowLeft id="menu" />
          <GiNotebook id="menu" />
        </Link>
      </header>
      <div id="body">
        {/* {id} */}
        <h1 id="recipeTitle">{recipe.name}</h1>
        <Container id="container">
          <Image thumbnail={true} id="recipeImage" src={recipe_image} />
          <ListGroup>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Cooking Time</div>
                {recipe.time} mins
              </div>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <div>
                <div className="fw-bold">Definition</div>
                {recipe.definition}
              </div>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Cookware</div>
                {recipe.cookware}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Heat</div>
                {recipe.heat}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Preparation</div>
                {recipe.preparation}
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
      <footer>
        <Link id="link" to="/">
          <img id="img2" className="Gif" src={crackedEgg} />
        </Link>
      </footer>
    </div>
  );
}

export default Recipe;
