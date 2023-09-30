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
              Inscrições abertas - Fábrica de Aplicativos
            </p>
          </a>
          <footer className="flex gap-6 mt-6 ">
            <Social url="https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s%7Cc%7C320269324053%7Ce%7Cfacebook%7C&placement=&creative=320269324053&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001625%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw1bMF6lT4IPWOMan6h---30vJgxIZszEdyo5ZTjw6Sa9nsC41gVTPQaAsnxEALw_wcB">
              <FaFacebook size={30} color="#fff" />
            </Social>
            <Social url="https://www.instagram.com/">
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
