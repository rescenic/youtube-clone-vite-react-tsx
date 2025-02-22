import { Fragment } from "react";
import Button from "../components/Button";
import { Link } from "react-router";

const Watch = () => {
  return (
    <Fragment>
      <Link to="/">
        <Button name="Home" />
      </Link>
      <p>You are in Watch page.</p>
    </Fragment>
  );
};

export default Watch;
