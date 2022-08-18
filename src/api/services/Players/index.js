import axios from "axios";
import qs from 'qs';
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const getPlayers = async (query={}) => {

  const response = await axios.get(
    `${API_URL}/${Paths.Players.players}?${qs.stringify(query)}<`,
  );

  return response;
};

export const getPlayersOnline = async () => {
  const response = await axios.get(
    `${API_URL}/${Paths.Players.playersOnline}`,
  );

  return response;
};
