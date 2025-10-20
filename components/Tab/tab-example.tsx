import React from 'react'


export default function TabExample({objeto}:
{
  objeto:{
    title:string;
    description:string;
    code:string;
  }
}) {
  return (
    <div className="bg-slate-600 text-slate-200 p-12 m-3">
                <h3 className="mb-10 text-lg">
                    {objeto.title}
                </h3>
                 <p className="mb-10">
                    {objeto.description}
                </p>
                <hr />
                <pre className="mt-3 overflow-hidden">
                    <code>
                    {objeto.code}
                    </code>
                </pre>
            </div>
  )
}
