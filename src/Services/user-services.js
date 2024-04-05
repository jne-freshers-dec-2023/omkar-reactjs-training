import { myaxios } from "./helper";
export const signup = (user) => {
  return myaxios.post("/signup", user).then((responce) => responce.json());
};

export const loginuser = (logindetil) => {
  return myaxios.post("/login", logindetil).then((responce) => responce.data);
};
