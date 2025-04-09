import React from "react";
import Link from "next/link";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A portfolio built with Next.js and Tailwind.",
    },
    {
      id: 2,
      name: "Todo App",
      description: "A simple app for task management.",
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-5'>
      {projects.map((project) => (
        <div
          key={project.id}
          className='border p-4 rounded-lg hover:shadow-lg'>
          <h2 className='font-bold text-lg'>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
