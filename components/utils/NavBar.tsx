import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Config } from "@/data/config";
import { nanoid } from "nanoid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode, MdSearch } from "react-icons/md";

const MenuItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "POSTS",
    href: "/posts",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
];

export const NavBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsSideNavOpen(false);
  };

  return (
    <Sheet onOpenChange={(open) => setIsSideNavOpen(open)} open={isSideNavOpen}>
      <div className="sticky top-0 z-50 border-black-200 dark:border-gray-700 border-b bg-white dark:bg-gray-950 flex flex-wrap justify-between py-3 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-52">
        <Link className="cursor-pointer my-auto text-2xl font-bold" href="/">
          <h1 className={`font-fang-zheng-xiao-biao-song my-auto`} title="Click to jump to home page.">
            {Config.SiteTitle}
          </h1>
        </Link>
        <div className="my-auto hidden sm:flex">
          {MenuItems.map((menuItem) => (
            <Link
              className="font-bold hover:text-sky-700 dark:hover:text-sky-500 mx-2 my-auto px-2"
              href={menuItem.href}
              key={nanoid()}
              onClick={() => setIsSideNavOpen(false)}
            >
              {menuItem.title}
            </Link>
          ))}
          <Link
            className="cursor-pointer mx-2 rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            href={"/search"}
            title="Search posts by keywords"
          >
            <MdSearch />
          </Link>
          <div
            className="cursor-pointer mx-1 rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            onClick={handleSwitchTheme}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
        </div>
        <div className="text-3xl sm:hidden my-auto">
          <SheetTrigger
            className="text-black rounded-full p-1 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            title="Spread the navigation menu"
          >
            <MdMenu
              onClick={() => {
                setIsSideNavOpen(!isSideNavOpen);
              }}
            />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent className="bg:white border-none py-16 shadow-md dark:bg-black flex flex-col text-end">
        {MenuItems.map((menuItem) => (
          <Link
            className="border-b border-dashed p-3 text-xl hover:text-sky-500"
            href={menuItem.href}
            key={nanoid()}
            onClick={() => setIsSideNavOpen(false)}
          >
            {menuItem.title}
          </Link>
        ))}
        <Link
          className="border-b border-dashed p-3 text-xl hover:text-sky-500"
          href="/search"
          onClick={() => setIsSideNavOpen(false)}
          title="Search the posts"
        >
          {"SEARCH"}
        </Link>
        <div
          className="flex text-xl p-3 cursor-pointer border-b border-dashed justify-end hover:text-sky-500"
          onClick={handleSwitchTheme}
        >
          <div
            className="cursor-pointer mx-1 my-auto rounded-full text-2xl"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
          <div className="my-auto">{theme === "light" ? "DARK" : "LIGHT"}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
