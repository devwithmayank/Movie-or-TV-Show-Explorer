import baseApiAxiosInstance from "../baseApiAxiosInstance";

export const getMoviesByCategory = async (category: string) => {
  const response = await baseApiAxiosInstance.get(`/movie/${category}`);
  console.log(response.data);
  return response.data;
};
