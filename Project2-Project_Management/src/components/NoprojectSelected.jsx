import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoprojectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a prject or get started with an new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
