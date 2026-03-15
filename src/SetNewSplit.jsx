import { useState } from "react";

import Header from "./HeaderMVP";
import { Link } from "react-router";
import { BackArrow } from "./components/BackArrow";

export function SetNewSplit() {
  const [amt, setAmount] = useState(0);
  return (
    <div className="h-screen w-full flex-col">
      {/* <Header toLocate="/chats" /> */}
      <Header>
        <Header.Main>
          <div className="h-6 w-6">
            <Link to="/chats">
              <BackArrow className="h-full w-full" />
            </Link>
          </div>
          <div className="text-center w-full items-center justify-center">
            <h1 className="text-xl text-bold text-[#000000]">
              Split expense with
            </h1>
            <h1 className="text-m text-bold text-[#333333]">Binit</h1>
          </div>
        </Header.Main>
      </Header>
      <div className=" flex flex-col items-center justify-center p-16">
        <div className="text-app-primary font-bold">Total Amount</div>
        <div className="flex items-center justify-center p-4 gap-1 border-b border-app-primary">
          <span className="text-6xl">₹</span>
          <span
            inputMode="numeric"
            contentEditable="true"
            onChange={(e) => setAmount(e.target.value)}
            className="text-6xl outline-none min-w-[1ch]"
            id="amount"
          >
            {amt}
          </span>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
