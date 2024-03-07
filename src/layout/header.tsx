import { useTheme } from "@/contexts/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { navLinks } from "@/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const matches = useMediaQuery("(min-width: 1024px)");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container z-20 relative min-h-20 py-6">
      <nav className="flex-between">
        {!matches ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Menu />
          </Button>
        ) : (
          <ul className="flex gap-x-12">
            {navLinks.map((navLink) => {
              return (
                <li
                  key={navLink.id}
                  className="text-muted-foreground hover:text-primary text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  <a href={navLink.path}>{navLink.title}</a>
                </li>
              );
            })}
          </ul>
        )}

        <div className="flex">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Moon color="white" /> : <Sun />}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
