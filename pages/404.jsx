import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-img-element
export default function FourOhFour() {
  return (
    <>
        <Head>
          <title>Roxza.Me - 404</title>
        </Head>
        <div className="text-center">
          <Image width={850} height={450} src="https://i.ibb.co/RbhzLcy/pngwing-com.png" />
          <Link href="/">
            <a>
              <br/>
              <button style={{ "backgroundColor" : "#d49090"}} className="w-auto py-2 px-8 rounded-lg text-white shadow-lg shadow-violet-600/20">
               <i className="fal fa-arrow-left"></i> Go Back
              </button>
            </a>
          </Link>
        </div>
    </>
  );
}
