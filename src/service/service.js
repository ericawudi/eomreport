//set-up axios

import axios from "axios";
import Cookies from "universal-cookie";
import { Constants as K } from "./constant";

const cookies = new Cookies();

const APIAxios = axios.create({
  baseURL: K.App.BASE_API_URL,
});

APIAxios.defaults.headers.post["Content-Type"] = "application/json";
APIAxios.defaults.headers.common["Authorization"] = cookies.get(
  K.App.API_TOKEN
);

// Check if logged in
export function isAuthenticated() {
  if (cookies.get(K.App.API_TOKEN)) {
    return true;
  } else {
    return false;
  }
}

// Log out
export function logUserOut() {
  cookies.remove(K.App.API_TOKEN);
}

// Log user in
export function Login(username, password) {
  const resp = APIAxios.post("/login.php", {
    username,
    password,
  })
    .then((resp) => {
      cookies.set(K.App.API_TOKEN, resp.authToken, {
        path: "/",
      });
      return resp;
    })
    .catch((error) => {
      console.log({ error });
      return error;
    });
}

// Get votes by category
export const GetClientData = async (username, date) => {
  const resp = await APIAxios.post("/index.php", {
    username: username,
    date: date,
  })
    .then((resp) => {
      console.log({ resp });
      return resp;
    })
    .catch((err) => {
      console.log({ errorrr: err });
      return err;
    });
};
