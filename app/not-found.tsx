import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
    return (
        <section className="w-screen h-screen">
            <div className="container mx-auto h-screen grid grid-cols-2 place-items-center">
                <div className="w-full h-full relative">
                    <Image
                        className="w-1/2"
                        src={"/assets/nf.gif"}
                        fill={true}
                        objectFit="contain"
                        alt="not-found"
                    ></Image>
                </div>
                <div className="w-full h-full grid place-items-center content-center">
                    <h1 className="font-pixyboy text-9xl  bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-4xl font-semibold mt-6 font-robotics tracking-wider">
                        Page not found... Go back to{" "}
                        <span className="text-emerald-500 underline">
                            <Link href="/">Home</Link>
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
