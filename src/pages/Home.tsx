import { Fragment } from "react";
import Button from "../components/Button";
import { Link } from "react-router";

const Home = () => {
  return (
    <Fragment>
      <Link to="/watch">
        <Button name="Watch" />
      </Link>
      <p>You are in Home page.</p>
    </Fragment>
  );
};

export default Home;
