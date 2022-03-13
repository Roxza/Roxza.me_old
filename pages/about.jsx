/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import Head from "next/head";
import { FiGithub } from "react-icons/fi";
import { SiDiscord, SiSpotify, SiTwitter, SiInstagram, SiAnilist } from "react-icons/si";
import { GoMail } from "react-icons/go"
export default function Projects() {
  return (
    <div>
      <Head>
        <title>Roxza.Me - About</title>
      </Head>
      <main className="pt-12">
        <div className="projects">
          <h1 className="text-white text-4xl font-bold">About</h1>
          <h1 className="text-gray-300 text-2xl mt-8">
            Hello, you can read more about me on this page.
          </h1>
          <p className="text-gray-100 text-xl mt-4">
            Hello, I am a high school student, I am very curious and I like to
            discover new things. I made my first website with{" "}
            <a href="https://expressjs.com" className="link">
              Express.JS
            </a>{" "}
            and then I learned many programming languages, lastly I tried hard
            to learn{" "}
            <a href="https://nuxtjs.org" className="link">
              Nuxt.JS
            </a>
            . The website you are reading now was made with{" "}
            <a href="https://nextjs.org" className="link">
              Next.JS
            </a>
            . I shared the website publicly on github. I know more than 5
            programming languages and frameworks so far, in my spare time I read
            manga, novels and watch anime and like to learn new things.
          </p>
          <h1 className="text-gray-300 text-2xl mt-8">
            Thank you for reading this article.
          </h1>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://github.com/Roxza"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <FiGithub className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://discord.com/users/939851664389730304"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiDiscord className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://open.spotify.com/user/31u6lhhrwwsh6wtoke7rthovhi2i"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiSpotify className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://twitter.com/"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiTwitter className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="mailto:me@roxza.me"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <GoMail className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://instagram.com/"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiInstagram className="icons" />
            </button>
          </a>
          <a
            target="_blank"
            className="flex float-left mt-8"
            href="https://anilist.co/user/Roxza/"
            rel="noopener noreferrer"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiAnilist className="icons"   />
            </button>
          </a>
        </div>
        <br />
      </main>
      <br/>
      <br/>
    </div>
  );
}
