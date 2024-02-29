"use client";
import Image from "next/image";
import { NAMES, NAME_REDUCER_ACTIONS, useNameContext } from "./NameContext";

export const Face = () => {
    const { name, dispatch } = useNameContext();

    return (
        <div className="w-full lg:grid-cols-min-grow-min place-items-center container p-6 mx-auto gap-6 lg:h-[80vh] grid">
            <div
                onClick={() =>
                    dispatch({ type: NAME_REDUCER_ACTIONS.TOGGLE_NAME })
                }
                className="grid cursor-pointer justify-items-start gap-1"
            >
                <div className="flex items-center justify-center gap-3">
                    <h2 className="flex text-3xl">Hello,</h2>
                    <h2 className="text-xl mt-2">I&apos;m</h2>
                </div>
                <div
                    className={
                        "font-semibold mt-6 text-nowrap bg-gradient-to-tr bg-clip-text text-transparent " +
                        (name === NAMES[0]
                            ? "lg:text-6xl text-5xl to-emerald-300 from-emerald-600"
                            : "from-indigo-400 text-3xl to-indigo-200")
                    }
                >
                    Dhaivath Lal
                </div>
                <span
                    className={
                        "bg-gradient-to-tr text-nowrap font-pixyboy bg-clip-text text-transparent " +
                        (name === NAMES[1]
                            ? "to-emerald-300 text-6xl lg:text-7xl from-emerald-600 -ml-2"
                            : "from-indigo-400 text-2xl to-indigo-200")
                    }
                >
                    {" "}
                    &lt;the-dev-d&gt;{" "}
                </span>
            </div>
            <div className="relative w-4/5 md:3/5 lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-full group">
                <div
                    style={{ clipPath: "polygon(100% 0, 0 23%, 62% 99%)" }}
                    className="w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute aspect-square bg-gradient-to-tr from-emerald-600  to-emerald-300"
                ></div>
                <div
                    style={{
                        clipPath: "polygon(50% -20%, 0 23%, 62% 99%, 100% 0)"
                    }}
                    className="w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <img
                        className="scale-110 w-full h-full object-contain group-hover:scale-125 transition-all object-contain"
                        src="/assets/profile.webp"
                        alt="face"
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-none text-4xl gap-6 w-full lg:w-fit place-items-center">
                <div className="bg-gradient-to-tr hover:from-indigo-600 hover:bg-indigo-400 hover:text-white transition-all from-emerald-500 to-emerald-300 p-2 rounded-full w-14 aspect-square grid place-items-center">
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="bg-gradient-to-tr hover:from-indigo-600 hover:bg-indigo-400 hover:text-white transition-all from-emerald-500 to-emerald-300 p-2 rounded-full w-14 aspect-square grid place-items-center">
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className="bg-gradient-to-tr hover:from-indigo-600 hover:bg-indigo-400 hover:text-white transition-all from-emerald-500 to-emerald-300 p-2 rounded-full w-14 aspect-square grid place-items-center">
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
};
