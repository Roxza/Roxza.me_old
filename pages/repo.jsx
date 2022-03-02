/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities

import Head from "next/head";
import RepoC from "../components/RepoC";

export async function getServerSideProps() {
  const _repo = await fetch(`https://api.github.com/users/roxza/repos`);
  const data = await _repo.json();
  const filter = ["Roxza"];
  const filterRep = data.filter((repo) => repo.fork === false && !filter.includes(repo.name));
  return { props: { repo: filterRep } };
}
export default function Repositories({ repo }) {
  return (
    <div>
      <Head>
        <title>Roxza.Me - Repositories</title>
      </Head>
      <main className="pt-4">
        <div className="repo">
          <h1 className="res text-white text-4xl font-bold">Repositories</h1>
          <h1 className="text-gray-300 text-xl">
            My open source codes on Github.
          </h1>
          <div
            className="py-4 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-4"
            id="project-card"
          >
            <RepoC repos={repo} />
          </div>
        </div>
        <br />
      </main>
    </div>
  );
}
