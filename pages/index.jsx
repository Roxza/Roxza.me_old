/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities

import Head from "next/head";
import Loader from "../components/Loader";
import Quotes from "../data/quotes.json";

export async function getServerSideProps() {
  const url = "https://api.roxza.me/api/user?user=939851664389730304";
  const res = await fetch(url);
  const data = await res.json();
  var q = Quotes[Math.floor(Math.random() * Quotes.length)];
  return { props: { profile: data.data, quotes: q } };
}

export default function Home({ profile, loading, quotes }) {
  return (
    <div>
      <Head>
        <title>Roxza.Me - Home</title>
      </Head>

      <main className="pt-30">
        <div className="head">
          <div className="order-first mr-5 flex-shrink-0 relative float-right ml-8">
            {loading ? (
              <>
                <Loader type="avatar" />
                <Loader type="status" />
              </>
            ) : (
              <>
                <img
                  alt="Roxza"
                  src={`https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.user.avatar}`}
                  width="180"
                  height="180"
                  className="rounded-full"
                />
                <div
                  className={`${profile.user.status} border border-gray-700 w-[32px] h-[32px] rounded-full absolute bottom-0 right-4`}
                ></div>
              </>
            )}
          </div>
          <p className="page-text">Hi, Roxza 👋🏻</p>
          <p className="page-description">
            Hello, I'm a backend developer, I'm a 16 year old high school
            student, I'm very curious, I like to do new things, I recently
            started learning Nuxt.JS and I make simple websites, if you want to
            know more about me, you can check page about me.
          </p>
        </div>
        <div>
          <p className="quote">“{quotes.text}”</p>
          <p className="quote-say">{quotes.say}</p>
        </div>
        <div>
          {profile.spotify === null ? (
            <></>
          ) : (
              <iframe
                src="https://linkcord.swoth.xyz/api/v1/widget/939851664389730304?type=spotify&theme=dark"
                width="800"
                height="180"
                className="mt-3 text-center"
                allowTransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
          )}
        </div>
      </main>
    </div>
  );
}
