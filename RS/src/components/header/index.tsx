import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../service/firebaseconection";

export function Header() {
  async function HandleLogaut() {
    await signOut(auth);
  }
  return (
    <section className="bg-white flex justify-between items-center gap-3 w-2/3 h-9 mt-20 px-3">
      <div className="flex gap-8 font-medium">
        <Link to="/"></Link>
        <Link to="/">Home </Link>
        <Link to="/Login">Login </Link>
        <Link to="/Admin">Admin </Link>
        <Link to="Admin/Social"> Redes Sociais </Link>
      </div>
      <button onClick={HandleLogaut}>
        {" "}
        <BiLogOut size={30} />{" "}
      </button>
    </section>
  );
}
