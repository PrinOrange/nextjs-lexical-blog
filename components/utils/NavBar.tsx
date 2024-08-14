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
      <div className="sticky top-0 z-50 flex flex-wrap justify-between border-black-200 border-b bg-white px-5 py-3 md:px-10 lg:px-20 xl:px-32 2xl:px-52 dark:border-gray-700 dark:bg-gray-950">
        <Link className="my-auto cursor-pointer font-bold text-2xl" href="/">
          <h1 className={"website-title-font my-auto"} title="Click to jump to home page.">
            {Config.SiteTitle}
          </h1>
        </Link>
        <div className="my-auto hidden sm:flex">
          {MenuItems.map((menuItem) => (
            <Link
              className="mx-2 my-auto px-2 font-bold hover:text-sky-700 dark:hover:text-sky-500"
              href={menuItem.href}
              key={nanoid()}
              onClick={() => setIsSideNavOpen(false)}
            >
              {menuItem.title}
            </Link>
          ))}
          <Link
            className="mx-2 cursor-pointer rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            href={"/search"}
            title="Search posts by keywords"
          >
            <MdSearch />
          </Link>
          <div
            className="mx-1 cursor-pointer rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            onClick={handleSwitchTheme}
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
        </div>
        <div className="my-auto text-3xl sm:hidden">
          <SheetTrigger
            className="rounded-full p-1 text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
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
      <SheetContent className="bg:white flex flex-col border-none py-16 text-end shadow-md dark:bg-black">
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
          className="flex cursor-pointer justify-end border-b border-dashed p-3 text-xl hover:text-sky-500"
          onClick={handleSwitchTheme}
        >
          <div
            className="mx-1 my-auto cursor-pointer rounded-full text-2xl"
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
