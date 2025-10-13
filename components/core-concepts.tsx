import React from "react";
import Image, { StaticImageData } from "next/image";

export default function CoreComponents({title, image, description}
    :{
    title: string;
    image: StaticImageData;
    description: string;
    }) {
    return(
        <li className="flex flex-col items-center justify-center">
          <Image src={image} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">{title}</h2>
          <p className="p-3 mt-2 text-slate-200">
           {description}
          </p>
        </li>
    )

}