import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaSpotify } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/ronaldris21' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ronaldris21/' },
  // { icon: <FaYoutube />, path: '' },
  { icon: <FaSpotify />, path: 'https://open.spotify.com/show/7LfINr1QUBhWQncnMCr0by?si=02f0d8e4a82f4277' },
  // { icon: <FaTwitter />, path: '' }
];

const SocialButtons = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles} target="blank" >
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default SocialButtons;
  