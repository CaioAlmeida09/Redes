import { Social } from "../../../components/social/social/index";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl text-white mb-2">
          Caio Vinicius Galindo de Almeida{" "}
        </h1>
        <p className="text-white text-lg "> Veja meus links 👇 </p>
        <main className="mt-12 flex flex-col justify-center items-center w-10/12">
          <a className="px-8 py-2 bg-red-600 rounded-lg cursor-pointer">
            <p className="text-white text-lg">
              {" "}
              Inscrições abertas - Fábrica de Aplicativos
            </p>
          </a>
          <footer className="flex gap-6 mt-6 ">
            <Social url="https://www.youtube.com/watch?v=cO-ZeBxY6_s">
              <FaFacebook size={30} color="#fff" />
            </Social>
            <Social url="https://www.youtube.com/watch?v=cO-ZeBxY6_s">
              <FaInstagram size={30} color="#fff" />
            </Social>
            <Social url="https://www.youtube.com/watch?v=cO-ZeBxY6_s">
              <FaYoutube size={30} color="#fff" />
            </Social>
          </footer>
        </main>
      </div>
    </>
  );
}
