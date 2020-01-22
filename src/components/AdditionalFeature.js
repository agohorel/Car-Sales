import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../actions/addFeature";
import { removeFeature } from "../actions/removeFeature";

const AdditionalFeature = props => {
  const { addFeature, removeFeature } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addFeature(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(undefined, { addFeature, removeFeature })(
  AdditionalFeature
);
