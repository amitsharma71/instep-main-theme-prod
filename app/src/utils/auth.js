import jwtDecode from "jwt-decode";

export const isUserLogined = () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return token ? true : false;
};

export const getToken = () => {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    return token;
  } else if (typeof window == "undefined") {
    localStorage.clear();
  }
  return token;
};

export const getUserId = () => {
  var token = getToken();
  let decoded = null;
  if (token) {
    decoded = jwtDecode(token);
  }
  return decoded;
};
