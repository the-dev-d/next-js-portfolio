"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NAMES, NAME_REDUCER_ACTIONS, useNameContext } from "./NameContext";

type NavbarProps = {
    title1: string[];
    title2: string[];
};

export const Navbar: React.FC<NavbarProps> = ({ title1, title2 }) => {
    const [mode, setMode] = useState("light_mode");
    const { name, dispatch } = useNameContext();
    let nameParts = name.split(" ");

    return (
        <nav className="w-full p-9 ">
            <div className="container mx-auto flex items-center justify-between">
                <div
                    onClick={() => {
                        dispatch({ type: NAME_REDUCER_ACTIONS.TOGGLE_NAME });
                    }}
                    className="flex cursor-pointer items-center justify-center gap-3 w-fit place-items-center"
                >
                    <div>
                        <img
                            className="w-10 aspect-square"
                            src="/assets/logo.png"
                            alt="logo"
                        />
                    </div>
                    <div className="grid font-semibold text-lg">
                        <span>{nameParts[0]}</span>
                        <span className="text-emerald-400">{nameParts[1]}</span>
                    </div>
                </div>
                <div
                    onClick={() => {
                        mode === "dark_mode"
                            ? setMode("light_mode")
                            : setMode("dark_mode");
                        if (mode === "light_mode") {
                            alert(
                                "Hang tight I'm working on the light mode colors 😜!"
                            );
                        }
                    }}
                    className="scale-125 text-emerald-400 p-3 rounded-full aspect-square cursor-pointer"
                >
                    <span className="material-symbols-outlined hover:rotate-180 transition-all">
                        {mode}
                    </span>
                </div>
            </div>
        </nav>
    );
};
