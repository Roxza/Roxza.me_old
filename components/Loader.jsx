import { NextPage } from "next";

const Loader = (props) => {
  const { type } = props;

  return (
    <div>
      {type == "avatar" && (
        <div className="border border-gray-700 bg-gray-700 w-[180px] h-[180px] animate-pulse rounded-full"></div>
      )}
      {type == "status" && (
        <div className="offline border border-gray-700  w-[32px] h-[32px] rounded-full absolute bottom-0 right-4"></div>
      )}
      {type == "project-card" && (
        <div className="card p-4">
          <div className="rounded-md bg-gray-700 h-5 animate-pulse w-55 bg-gray-700 py-16" />
          <h1 className="text-white font-bold text-3xl clamp-3 mt-3">
            <div className="rounded-md bg-gray-500 h-8 animate-pulse w-2/5 dark:bg-gray-700" />
          </h1>
          <p className="text-white my-3 opacity-75 mt-8">
            <div className="mt-1 rounded-md bg-gray-500 h-5 animate-pulse w-2/4 dark:bg-gray-700" />
            <div className="mt-1 rounded-md bg-gray-500 h-5 animate-pulse w-2/3 dark:bg-gray-700" />
            <div className="mt-1 rounded-md bg-gray-500 h-5 animate-pulse w-2/2 dark:bg-gray-700" />
            <div className="mt-1 rounded-md bg-gray-500 h-5 animate-pulse w-2/1 dark:bg-gray-700" />
          </p>
          <a
            target="_blank"
            href="https://giftix.xyz"
            className="py-2 px-2 border-white text-white w-full text-center flex items-center justify-center projects-button hover:text-black rounded-md border-2 transition-all font-bold cursor-pointer"
            rel="noreferrer"
          >
            View
          </a>
        </div>
      )}
      <style jsx>
        {`
          .projects-button:hover {
            background-color: #eccece;
          }
          .pu {
            background-color: #d7b7ee;
          }
        `}
      </style>
    </div>
  );
};

// export component
export default Loader;
