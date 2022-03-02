import Image from "next/image";

const ProjectC = (props) => {
  const { projects } = props;

  return (
    <>
      {projects.map((project, key) => (
        <div className="card p-4" key={key}>
          <Image
            className="rounded-xl"
            alt={project.name}
            src={project.image}
            width={"260px"}
            height={"150px"}
          />
          <h1 className="text-white font-bold text-3xl clamp-3">
            {project.name}
          </h1>
          <p className="text-white my-3 opacity-75">{project.description}</p>

          <a
            target="_blank"
            href={project.link}
            className="py-2 px-2 border-white text-white w-full text-center flex items-center justify-center projects-button hover:text-black rounded-md border-2 transition-all font-bold cursor-pointer"
            rel="noreferrer"
          >
            View
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
export default ProjectC;
