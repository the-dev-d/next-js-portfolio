import Image from "next/image";
import { Navbar } from "./ _components/Navbar";
import { Face } from "./ _components/Face";
import { OptionsPanel } from "./ _components/OptionsPanel";
import { getOSNames } from "./_lib/servercalls";
import * as Chart from "./ _components/Charts";
import * as Devd from "./ _components/Devd";

export default async function Home() {
    const osNames = await getOSNames();

    return (
        <>
            <Navbar
                title1={["The", "Dev-D"]}
                title2={["Dhaivath", "Lal"]}
            ></Navbar>
            <Face></Face>
            <section className="container mx-auto my-10 p-6">
                <Devd.Title>This website is made and served using:</Devd.Title>
                <div className="text-8xl lg:text-9xl items-center justify-between px-3 my-6 grid grid-cols-2 lg:grid-cols-4 place-items-center">
                    <i className="devicon-nextjs-original-wordmark"></i>
                    <i className="devicon-tailwindcss-plain-wordmark colored"></i>
                    <i className="devicon-spring-original-wordmark text-7xl lg:text-8xl colored"></i>
                    <i className="devicon-docker-plain-wordmark colored text-6xl lg:text-7xl"></i>
                </div>
            </section>
            <div className="container mx-auto my-28">
                <Chart.Charts>
                    <Devd.Title>GitHub Programming Languages Report</Devd.Title>
                    <p className="opacity-50 flex items-center justify-center w-fit gap-2">
                        <span className="material-symbols-outlined">info</span>
                        This only shows projects done on personal account
                    </p>
                </Chart.Charts>
            </div>
            <OptionsPanel options={osNames}>
                <Devd.Title>Operating Systems</Devd.Title>
                <p className="text-lg my-3 text-emerald-50">
                    Over the years I have used many operating systems, both
                    experimentally and as my daily driver. Now this may not be
                    the most accurate review and these operating systems and
                    your opinion may differ. But these are my thoughts on them,
                    support me if you agree with them or find it helpful.
                </p>
            </OptionsPanel>
        </>
    );
}
