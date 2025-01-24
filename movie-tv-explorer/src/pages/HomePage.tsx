import NavBar from "../components/NavBar/NavBar";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">
          Welcome to Movie and TV series explorer
        </h1>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex items-start gap-10 w-full">
            <img
              src="/images/breaking-bad.jpg"
              alt="Movie TV Explorer"
              className="w-60 h-40 rounded-md object-cover"
            />
            <div className="flex flex-col">
              <p>Explore TV Shows</p>
              <p>What's new, popular and trending in TV shows</p>
              <Button onClick={() => {}} variant="primary">
                Explore
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-10 w-full">
            <img
              src="/images/black-panther.jpg"
              alt="Movie TV Explorer"
              className="w-60 h-40 object-cover rounded-md"
            />
            <div className="flex flex-col">
              <p>Explore Movies</p>
              <p>What's new, popular and trending in TV movies</p>
              <Button onClick={() => {}} variant="primary">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
