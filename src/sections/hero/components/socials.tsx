import { useTheme } from "@/contexts/ThemeProvider";
import { socialMediaLinks } from "@/data";

const Socials = () => {
  const { theme } = useTheme();

  return (
    <ul className="flex gap-x-2">
      {socialMediaLinks.map((socialMediaLink) => {
        const SocialMediaIcon = socialMediaLink.icon;
        return (
          <li key={socialMediaLink.id}>
            <a href={socialMediaLink.path} target="_blank" rel="noreferrer">
              <SocialMediaIcon
                color={theme === "light" ? "black" : "white"}
                size={20}
                strokeWidth={1.2}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
