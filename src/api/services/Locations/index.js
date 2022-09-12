import protectedHttp from "../../ProtectedHTTP";
import qs from 'qs';
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const getLocations = async (playerId, query={}) => {
  const response = await protectedHttp.get(
    `${API_URL}/${Paths.Locations.locations(playerId)}?${qs.stringify(query)}`,
  );

  return response;
};
