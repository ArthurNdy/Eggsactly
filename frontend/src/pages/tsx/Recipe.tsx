import React, { useEffect, useState } from "react";
import "../css/Recipe.css";
import crackedEgg from "../../images/crackedEgg.gif";
import { Link, useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { GiNotebook } from "react-icons/gi";
import { BsArrowLeft } from "react-icons/bs";
import Axios from "axios";

function Recipe() {
  interface Recipe {
    id: number;
    name: string;
    cooking_time: number;
    cooking_heat: string;
    description: string;
    cookware: string;
  }

  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const { id, recipe_name } = useParams();

  useEffect(() => {
    //List of the events of a patient for one day
    Axios.get(`http://localhost:8000/daily/${id}`).then((response) => {
      //Set list of the events of a patient for one day
      setRecipe(response.data);
    });
  }, [id]);

  return (
    <div className="Recipe">
      <header>
        <Link id="link" to="/recipes">
          <BsArrowLeft id="menu" />
          <GiNotebook id="menu" />
        </Link>
      </header>
      <div id="body">
        <h1 id="recipeTitle">{recipe[0]?.name}</h1>
        <Container id="container">
          <Image
            thumbnail={true}
            id="recipeImage"
            src={require(`../../images/recipes/${
              recipe_name?.split(" ")[0]
            }.jpg`)}
          />
          <ListGroup>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Cooking Time</div>
                {recipe[0]?.cooking_time} mins
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Cookware</div>
                {recipe[0]?.cookware}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Heat</div>
                {recipe[0]?.cooking_heat}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <div className="fw-bold">Preparation</div>
                {recipe[0]?.description}
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
