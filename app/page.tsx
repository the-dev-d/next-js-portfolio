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
      <Navbar title1={["The", "Dev-D"]} title2={["Dhaivath", "Lal"]}></Navbar>
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
      <OptionsPanel options={osNames} ></OptionsPanel>
      <div className="container mx-auto my-20">
        <Chart.Charts>
          <Devd.Title>Charts</Devd.Title>
        </Chart.Charts>
      </div>
    </>
  );
}
