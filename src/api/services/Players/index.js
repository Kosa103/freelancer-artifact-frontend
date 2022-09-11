import protectedHttp from "../../ProtectedHTTP";
import qs from 'qs';
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const getPlayers = async (query={}) => {
  const response = await protectedHttp.get(
    `${API_URL}/${Paths.Players.players}?${qs.stringify(query)}`,
  );

  return response;
};

export const getPlayersOnline = async () => {
  const response = await protectedHttp.get(
    `${API_URL}/${Paths.Players.playersOnline}`,
  );

  return response;
};
