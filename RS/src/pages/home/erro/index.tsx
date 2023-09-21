import { Link } from "react-router-dom";
export function Erro() {
  return (
    <>
      <div className="bg-red-600 w-full h-full items-center">
        <h1> Essa página não existe</h1>
        <Link to="/">
          <button className="p-3 bg-orange-500 " />
        </Link>
      </div>
    </>
  );
}
