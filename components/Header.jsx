import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

const Header = () => {
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/", icon: "fal fa-home-alt", size:"2xl"  },
    { label: "About", href: "/about", icon: "fal fa-book-open", size: "xl" },
    { label: "Projects", href: "/projects", icon: "far fa-code", size: "xl" },
    { label: "Repositories", href: "/repo", icon: "far fa-code-branch", size: "xl" },
    { label: "Contact", href: "/contact", icon: "far fa-at", size: "xl" }
  ];
  return (
    <>
      <div className="w-full h-20 bg-[#12101F] flex justify-center">
        <div className="max-w-screen-lg flex items-center w-full justify-center">
          <div className="flex items-center w-full gap-8">
          {navItems.map(item => (
            <Link href={item.href} key={item.href}>
              <a>
                <button
                  className={`inline-flex py-2 rounded items-center false text-gray-300 hover:text-[#ECCECE] ${
                    router.asPath === `${item.href}` && "text-[#ECCECE]"
                  }`}
                  styles="transform: none;"
                >
                  <i className={`${item.icon} text-${item.size} sm:mr-2`}></i>
                  <span className="hidden font-bold md:block">{item.label}</span>
                </button>
              </a>
            </Link>
            ))}
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              href="https://github.com/Roxza"
              rel="noopener noreferrer"
            >
              <button className="px-2 py-1 hover:text-[#EFBF9C] hover:bg-[#191729] text-gray-300 text-lg">
                <FiGithub className="text-2xl sm:mr-2" />
              </button>
            </a>
            <a
              target="_blank"
              href="https://discord.com/users/939851664389730304"
              rel="noopener noreferrer"
            >
              <button
                className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
                styles="transform: none;"
              >
                <SiDiscord className="text-2xl sm:mr-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
