"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";

export const DashBoardNavBar = () => {
    return (
        <header className="sticky top-0 z-40 w-full dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <a
                            rel="noreferrer noopener"
                            href="/"
                            className="ml-2 font-bold text-xl flex text-amber-50 rounded"
                        >
                            <span className = "text-purple-700">Octo</span><span>Plan</span>
                        </a>
                    </NavigationMenuItem>
                    <div className="hidden md:flex gap-2">
                        <a
                            rel="noreferrer noopener"
                            href="/register"
                            className={`border rounded text-white bg-purple-800 hover:bg-purple-900 hover:text-white border-purple-800 ${buttonVariants({variant: "ghost"})}`}
                        >
                            {localStorage.getItem("userName")}
                        </a>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};