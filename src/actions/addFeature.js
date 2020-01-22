import { ADD_FEATURE } from "./types";

export const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};
