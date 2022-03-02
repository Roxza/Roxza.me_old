/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities

import Head from "next/head";
import Loader from "../components/Loader";
import ProjectC from "../components/ProjectC";
import projects from "../data/projects.json";

export default function Projects({ loading }) {
  return (
    <div>
      <Head>
        <title>Roxza.Me - Projects</title>
      </Head>

      <main className="pt-12">
        <div className="projects">
          <h1 className="text-white text-4xl font-bold">My Projects</h1>
          <h1 className="text-gray-300 text-xl">
            The projects i am actively working on take place in this area.
          </h1>
          <div
            className="py-4 lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-4 pt-8"
            id="project-card"
          >
            {loading ? (
              <Loader type="project-card" />
            ) : (
              <ProjectC projects={projects.proj} />
            )}
          </div>
        </div>
        <br />
      </main>
    </div>
  );
}
