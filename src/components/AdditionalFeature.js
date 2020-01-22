import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../actions/addFeature";

const AdditionalFeature = props => {
  const { addFeature } = props;
  return (
    <li>
      <button
        className="button is-dark is-outlined is-inverted"
        onClick={() => addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(undefined, { addFeature })(AdditionalFeature);
