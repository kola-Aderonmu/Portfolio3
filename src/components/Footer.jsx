import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-center text-xl sm:p-4 ">
        <section
          className="flex items-center justify-center gap-x-2 cursor-pointer"
          onClick={() => window.open("#", "_blank")}
        >
          <FaGithub />
          <p>Adekola</p>
        </section>
      </div>
    </>
  );
};

export default Footer;
