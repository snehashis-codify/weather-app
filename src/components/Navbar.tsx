import SearchDialog from "./SearchDialog";
import ThemeDropdown from "./ThemeDropdown";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search_container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="flex items-center gap-2">
          <ThemeDropdown />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
