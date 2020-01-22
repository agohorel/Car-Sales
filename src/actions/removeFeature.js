import { REMOVE_FEATURE } from "./types";

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};
