'use client';
import React from 'react'

export default function TabButton({children, onClick, isSelected, className}:{
  children:React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
  className?: string;
}) {
  function handleClick(){
    console.log("Han apretado click");
    onClick();
  }
  let cssprops = className;
  if (!cssprops){
    cssprops = "inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white"
  }
  if (isSelected){
    cssprops += " bg-blue-500 text-white"
  }
  return (
    <>
    <button className={cssprops} onClick={handleClick}>
      {children}
      </button>
      </>
  )
}
