"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "./ui/button";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = () => {
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

                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] rounded text-amber-50 ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <a
                            rel="noreferrer noopener"
                            href="/login"
                            className={`border rounded bg-white text-black ${buttonVariants({variant: "secondary"})}`}
                        >
                            Login
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href="/register"
                                className={`border rounded text-white bg-purple-800 hover:bg-purple-900 hover:text-white border-purple-800 ${buttonVariants({variant: "ghost"})}`}
                        >
                            Register
                        </a>

                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};