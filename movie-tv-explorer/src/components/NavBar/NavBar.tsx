import LightModeToggle from "./LightModeToggle";

const NavBar = () => {
  return <>
  <div className="sticky top-0 left-0 right-0 z-50 bg-gray-800">
    <div className="flex justify-between items-center p-4">
        <div className="flex items-center">DevWithMayank</div>
        <div className="flex items-center gap-2">
            <button>Home</button>
            <button>Movies</button>
            <button>TV Shows</button>
            <button>About</button>
        </div>
    </div>
  </div>
  </>;
};

export default NavBar;  