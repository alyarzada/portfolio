import { useTheme } from "@/contexts/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { navLinks } from "@/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import NavLink from "./components/NavLink";
import { cn } from "@/lib/utils";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const matches = useMediaQuery("(min-width: 1024px)");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={cn("container lg:z-20 lg:relative  min-h-20 py-6")}
    >
      <nav className="flex-between relative">
        {!matches ? (
          <Button
            size="icon"
            variant="ghost"
            className="z-20 relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu />
          </Button>
        ) : (
          <ul className="flex gap-x-12">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} navLink={navLink} />;
            })}
          </ul>
        )}

        <div className="flex">
          <Button
            variant="ghost"
            className="z-20 relative"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Moon color="white" /> : <Sun />}
          </Button>
        </div>

        {showMenu && (
          <div className="absolute z-50 top-14 border border-white-100 w-full p-3 rounded-xl">
            <nav>
              <ul className="flex-center gap-x-12">
                {navLinks.map((navLink) => {
                  return <NavLink key={navLink.id} navLink={navLink} />;
                })}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
