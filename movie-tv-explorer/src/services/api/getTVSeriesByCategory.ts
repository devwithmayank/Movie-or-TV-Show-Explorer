import baseApiAxiosInstance from "../baseApiAxiosInstance";

export const getTVSeriesByCategory = async (category: string) => {
  const response = await baseApiAxiosInstance.get(`/tv/${category}`);
  console.log(response.data);
  return response.data;
};
