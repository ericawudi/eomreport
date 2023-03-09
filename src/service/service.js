//set-up axios

import axios from "axios";
import moment from "moment";
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
      if (resp.data?.status === 200) {
        cookies.set(K.App.API_TOKEN, resp.data?.authToken, {
          path: "/",
        });
      }
      return resp;
    })
    .catch((error) => {
      return { data: { message: error?.message } };
    });
  return resp;
}

// Get server 3 data
export const GetS3ClientData = async (username, date) => {
  const resp = await APIAxios.post("/index.php", {
    username: username,
    date: date,
  })
    .then((resp) => {
      return { data: resp.data?.data, status: resp.data?.status };
    })
    .catch((error) => {
      return { data: { message: error?.message } };
    });
  return resp;
};

// Get server 9 data
export const GetS9ClientData = async (username, date) => {
  const start_date = moment(date).format("YYYY-MM-DD");
  const end_date = moment(start_date).add(1, "month").format("YYYY-MM-DD");
  const data = JSON.stringify({
    user: username,
    start_date: start_date,
    end_date: end_date,
  });

  const config = {
    method: "post",
    url: "https://logs.nalosolutions.com/netreport/index.php",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const resp = axios(config)
    .then(function (response) {
      return { data: response.data, status: response.status };
    })
    .catch(function (error) {
      return { data: { message: error?.message } };
    });

  return resp;
};
