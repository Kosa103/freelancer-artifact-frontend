import protectedHttp from "../../ProtectedHTTP";
import Paths from "../../../utils/paths";
import { API_URL } from "../../../utils/constants";

export const getSystems = async () => {
  const response = await protectedHttp.get(
    `${API_URL}/${Paths.Systems.systems}`,
  );

  return response;
};
