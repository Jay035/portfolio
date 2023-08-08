export const Footer = () => {
  return (
    <footer className="bg-blackk text-light-grey pb-6 relative w-full bottom-0">
      <hr className="my-4 border-light-grey" />
      <div className="flex flex-col-reverse gap-4 w-fit mx-auto sm:flex-row sm:w-[90%] sm:max-w-[1000px] sm:items-center sm:justify-between ">
        <p className="flex items-center gap-1 mx-auto sm:mx-0">
          <i className="ri-copyright-line"></i>
          {new Date().getFullYear()} Chibuike Ukandu
        </p>
        <div className="flex justify-between gap-6">
          <a href="https://twitter.com/Chibuike035">
            <i className="ri-twitter-fill text-[2rem]  hover:text-white"></i>
          </a>
          <a href="https://github.com/Jay035">
            <i className="ri-github-fill text-[2rem] hover:text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/chibuike-ukandu-8385401b0/">
            <i className="ri-linkedin-box-fill text-[2rem] hover:text-white"></i>
          </a>
          <a href="mailto:codexjay08@gmail.com">
            <i className="ri-mail-line text-[2rem] hover:text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
