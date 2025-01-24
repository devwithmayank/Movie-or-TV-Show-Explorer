import { useForm } from "react-hook-form";

const SearchBar = () => {
const {handleSubmit} = useForm();
const onsubmit = (data: any) => {
  console.log(data);
}
  return <>
  <form className="flex items-center" onSubmit={handleSubmit(onsubmit)}>
    <input type="text" placeholder="Search for a movie or TV show" />
    <button type="submit">Search</button>
  </form>
  </>
};

export default SearchBar;
