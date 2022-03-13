import React from "react";
import swr from "../lib/swr";
import { FiGithub } from "react-icons/fi";
import {
  SiDiscord,
  SiSpotify,
  SiTwitter,
  SiInstagram,
  SiAnilist,
} from "react-icons/si";
import { GoMail } from "react-icons/go";

export default function About() {
  const [color, setColor] = React.useState("239, 68, 68");
  function generatorColor() {
    const out = [
      "244, 115, 185",
      "14, 62, 218",
      "239, 68, 68",
      "14, 24, 95",
      "0, 173, 181",
      "13, 98, 122",
      "67, 73, 110",
    ];
    setColor(out[Math.floor(Math.random() * out.length)]);
    return true;
  }
  const { data: _user } = swr("https://api.roxza.me/api/personal");
  const user = _user ? _user.data : null;
  return (
    <>
      <div className="p-10 flex flex-col items-center pt-8 space-x-2 bg-opacity-25 p-5 rounded-xl">
        {user ? (
          <>
            <img
              className="rounded-full w-40"
              src={`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`}
            />
          </>
        ) : (
          <>
            {" "}
            <div className="animate-pulse border border-gray-700 bg-gray-700 w-[160px] h-[160px] animate-pulse rounded-full" />
          </>
        )}
        <h3 className="pt-4 text-gray-300 pb-2 text-2xl font-bold leading-8 tracking-tight">
          Roxza#0002
        </h3>
        <div className="text-gray-300">Backend Developer</div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-left font-bold md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="prose leading-6 text-justify text-gray-600 dark:text-gray-400">
          <p>
            Hello, you can read more about me on this page.
            <br />
            <br />
            Hello, I am a high school student, I am very curious and I like to
            discover new things. I made my first website with Express.JS and
            then I learned many programming languages, lastly I tried hard to
            learn Nuxt.JS. The website you are reading now was made with
            Next.JS. I shared the website publicly on github. I know more than 5
            programming languages and frameworks so far, in my spare time I read
            manga, novels and watch anime and like to learn new things.
            <br />
            <br />
          </p>
          <p>
            In my spare time, I mostly watch anime, read novels and manga, study
            and watch movies, and listen to music as my favourite.
          </p>
          <br />

          <p className="text-2xl">
            Thank you for reading this article.{" "}
            <i
              style={{ color: "rgb(" + color + ")" }}
              onClick={() => generatorColor()}
              className="cursor-pointer fas fa-heart mx-0.5"
            ></i>
          </p>
        </div>
        <div>
          <a className="flex float-left mt-2" href="https://github.com/Roxza">
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <FiGithub className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a
            className="flex float-left mt-2"
            href="https://discord.com/users/939851664389730304"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiDiscord className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a
            className="flex float-left mt-2"
            href="https://open.spotify.com/user/31u6lhhrwwsh6wtoke7rthovhi2i"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiSpotify className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a className="flex float-left mt-2" href="#">
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiTwitter className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a className="flex float-left mt-2" href="#">
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiInstagram className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a
            className="flex float-left mt-2"
            href="https://anilist.co/user/Roxza/"
          >
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <SiAnilist className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
          <a className="flex float-left mt-2" href="mailto:me@roxza.me">
            <button
              className="-ml-2 py-2 px-4 rounded inline-flex items-center hover:text-[#EFBF9C] text-gray-300 font-normal text-lg"
              styless="transform: none;"
            >
              <GoMail className="w-[2.15em] h-[2.15em]" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
