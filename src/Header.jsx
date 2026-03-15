import { Link } from "react-router";

export function Header(props) {
  return (
    <div className="flex flex-col  bg-app-primary ">
      <div className="h-[4.5rem] flex flex-start  ex-sum p-4  items-center bg-app-primary">
        <div className="">
          <Link to={props.toLocate}>
            <img className="h-[1.6rem]" src="/back-arrow.svg" />
          </Link>
        </div>
        <div className="text-center w-full items-center justify-center">
          <h1 className="text-xl text-bold text-[#000000]">
            Split expense with
          </h1>
          <h1 className="text-m text-bold text-[#333333]">Binit</h1>
        </div>
      </div>
    </div>
  );
}
