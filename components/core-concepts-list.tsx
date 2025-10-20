import React from "react"
import Image, { StaticImageData } from "next/image";
import CoreComponents from "./core-concepts";
import componentsImg from "@/public/components.png";
import configImg from "@/public/config.png";
import stateImg from "@/public/state-mgmt.png";
import jsxImg from "@/public/jsx-ui.png"; 
import { CORE_CONCEPTS } from "@/scripts/data";
import CoreConcepts from "@/components/core-concepts";

export default function CoreConceptsList(){
    return(
<section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
        {CORE_CONCEPTS.map((cc) => <CoreConcepts key={cc.title} {...cc}/>)}
      </ul>
      </section>
    )
}