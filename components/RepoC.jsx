const RepoC = (props) => {
  const { repos } = props;

  return (
    <>
      {repos.map((repo, key) => (
        <div className="repo-card p-4" key={key}>
          <a href={`https://github.com/roxza/${repo.name}`}>
            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-2xl mb-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <h1 className="hover:text-[#ECCECE] font-normal text-2xl pb-2">
                {repo.name}
              </h1>
            </div>
            <p className="text-lg text-gray-400">Language: {repo.language}</p>
            <p className="text-lg text-gray-400">
              Stars: {repo.stargazers_count}
            </p>
            <p className="text-lg text-gray-400">Forks: {repo.forks}</p>
            <p className="text-gray-300 text-xl">{repo.description}</p>
            <div className="text-amber-300 flex items-center pt-2"></div>
          </a>
        </div>
      ))}
      <style jsx>
        {`
          .projects-button:hover {
            background-color: #eccece;
          }
        `}
      </style>
    </>
  );
};

// export component
export default RepoC;
