import axios from "axios";
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const getLocations = async playerId => {
  const response = await axios.get(
    `${API_URL}/${Paths.Locations.locations(playerId)}`,
  );

  return response;
};
