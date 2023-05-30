import React from "react";
import WorkCard from "./WorkCard";

const myWork = () => {
  return (
    <section className="my-32 tabletWorkSection">
      {/* Projects */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10 m-16 tabletWorkSection">
        <WorkCard isMyWorkActive={true} cardColor="bg-red-800" />
        <WorkCard cardColor="bg-purple-500" />
        <WorkCard cardColor="bg-green-600" />
        <WorkCard cardColor="bg-violet-400" />
        <WorkCard cardColor="bg-amber-700" />
        <WorkCard cardColor="bg-sky-500" />
      </div>
    </section>
  );
};

export default myWork;
