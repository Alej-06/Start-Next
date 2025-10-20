'use client';
import React from "react";
import { useState } from 'react';
import TabButton from "./tab-button";
import TabExample from "./tab-example";
import { EXAMPLES } from "@/scripts/data";

export default function TabExampleSection(){
    const [selected, setSelected] = useState<keyof typeof EXAMPLES | null>(null);
    function handleClick(tab: keyof typeof EXAMPLES){
        console.log("Han hecho click")
        setSelected(tab)
    }
    return(
        <section id="tab-section" className="my-12 md:mx-12 mx-4 flex flex-col">
            <div className="flex justify-start space-x-2">
            <TabButton isSelected={selected == 'components'} onClick={() => handleClick("components")}>{EXAMPLES.components.title}</TabButton>
            <TabButton isSelected={selected == 'jsx'} onClick={() => handleClick("jsx")}>{EXAMPLES.jsx.title}</TabButton>
            <TabButton isSelected={selected == 'props'} onClick={() => handleClick("props")}>{EXAMPLES.props.title}</TabButton>
            <TabButton isSelected={selected == 'state'} onClick={() => handleClick("state")}>{EXAMPLES.state.title}</TabButton>     
            </div>
           {
            !selected && <p className="text-slate-200 p-3">Selecciona un ejemplo para ver el código</p>
           }
           {
            !!selected && 
            <TabExample objeto={EXAMPLES[selected]}/>
           }
            
        </section>


    )
}