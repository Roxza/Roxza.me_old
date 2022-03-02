const Footer = () => {
  return (
    <>
      <div class="grid grid-cols-1 divide-y divide-[#997c7c] pt-3">
        <div></div>
        <div className="max-w-screen-lg text-white p-5 w-full mx-auto transition-all duration-300">
          <div className="md:flex w-full items-center justify-between">
            <div>
              <p>Copyright &copy; 2022</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center">
              <p>
                Developed with ❤️ by{" "}
                <a className="hover:text-[#ECCECE]" href="https://roxza.me">
                  Roxza
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
