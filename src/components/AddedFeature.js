import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../actions/removeFeature";

const AddedFeature = props => {
  const { removeFeature } = props;
  return (
    <li>
      <button
        className="delete is-medium"
        onClick={() => removeFeature(props.feature)}
      ></button>
      {props.feature.name}
    </li>
  );
};

export default connect(undefined, { removeFeature })(AddedFeature);
