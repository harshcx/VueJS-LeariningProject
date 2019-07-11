import { UserSubmit, UserResponse } from "./modules.d";
import axios from "axios";

export const conduitApi = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.commons["Authorization"] = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common["Authorization"];
}

export async function loginUser(
  user: UserSubmit
): Promise<UserResponse | undefined> {
  try {
    const response = await axios.post("/users/login", {
      user
    });
    return response.data as UserResponse;
  } catch (e) {
    console.log(e);
  }
}
