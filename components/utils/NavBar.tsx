import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Config } from "@/data/config";
import { fontFangZhengXiaoBiaoSongCN } from "@/styles/font";
import { nanoid } from "nanoid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const MenuItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "TAGS",
    href: "/tags",
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
    <Sheet open={isSideNavOpen} onOpenChange={(open) => setIsSideNavOpen(open)}>
      <nav className="responsive-width sticky top-0 z-50 flex justify-between py-3 backdrop-blur bg-white/50 dark:bg-black/50">
        <Link href="/" className="cursor-pointer">
          <h1
            className={`${fontFangZhengXiaoBiaoSongCN.className} my-auto border-b-4 border-b-black text-2xl font-bold dark:border-b-white`}
          >
            {Config.SiteTitle}
          </h1>
        </Link>
        <div className="my-auto hidden sm:flex">
          {MenuItems.map((menuItem) => (
            <Link
              href={menuItem.href}
              key={nanoid()}
              className="border-b-sky-600 font-bold hover:text-sky-600 dark:hover:border-b-sky-500 dark:hover:text-sky-500 mx-2 my-auto px-2"
              onClick={() => setIsSideNavOpen(false)}
            >
              {menuItem.title}
            </Link>
          ))}
          <div
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="cursor-pointer mx-2 rounded-full p-1 text-3xl text-black hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800"
            onClick={handleSwitchTheme}
          >
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
        </div>
        <SheetTrigger title="Spread the navigation menu" className="sm:hidden">
          <MdMenu
            className="my-auto text-3xl hover:cursor-pointer"
            onClick={() => {
              setIsSideNavOpen(!isSideNavOpen);
            }}
          />
        </SheetTrigger>
        <SheetContent className="bg:white border-none shadow-md dark:bg-black">
          <div className="my-5 flex flex-col">
            {MenuItems.map((menuItem) => (
              <Link
                href={menuItem.href}
                key={nanoid()}
                className="border-b border-dashed p-3 text-xl hover:text-sky-500"
                onClick={() => setIsSideNavOpen(false)}
              >
                {menuItem.title}
              </Link>
            ))}
            <div
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="cursor-pointer m-2 rounded-full p-1 text-xl text-black dark:text-gray-50"
              onClick={handleSwitchTheme}
            >
              {theme === "light" ? (
                <div className="flex">
                  {"DARK MODE"}
                  <MdOutlineDarkMode className="mx-2 my-auto" />
                </div>
              ) : (
                <div className="flex">
                  {"LIGHT MODE"}
                  <MdOutlineLightMode className="mx-2 my-auto" />
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </nav>
    </Sheet>
  );
};
