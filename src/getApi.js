import axios from "axios";

export const getApi = async (url) => {
  return (await axios.get(url)).data;
};
