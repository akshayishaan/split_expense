import { useState } from "react";

import Header from "./HeaderMVP";
import { Link } from "react-router";
import { BackArrow } from "../components/BackArrow";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../components/ui/combobox";
import { Button } from "@/components/ui/button";

export function SetNewSplit() {
  const [amt, setAmount] = useState(0);
  const [paidBy, setPaidBy] = useState("You");

  const paidByOptions = ["You", "Akshay"];

  return (
    <div className="h-screen w-full flex-col">
      <Header>
        <Header.Main>
          <Link to="/chats" className="block h-6 w-6 shrink-0">
            <BackArrow className="h-full w-full" />
          </Link>
          <div className="flex flex-col justify-center items-center w-full h-12">
            <h1 className="text-lg font-semibold text-[#000000] leading-tight">
              Split expense with
            </h1>
            <h1 className="text-sm font-medium text-[#333333]">Binit</h1>
          </div>
        </Header.Main>
      </Header>
      <div className=" flex flex-col items-center justify-center p-16 border-b border-grey border-dashed">
        <div className="text-app-primary font-bold">Total Amount</div>
        <div className="flex items-center justify-center p-4 gap-1 border-b border-app-primary">
          <span className="text-6xl">₹</span>
          <span
            inputMode="numeric"
            contentEditable="true"
            onChange={(e) => setAmount(e.target.value)}
            suppressContentEditableWarning
            className="text-6xl outline-none min-w-[1ch]"
            id="amount"
          >
            {amt}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 p-4">
        <span className="text-lg font-medium text-[#333333]">Paid By</span>
        <Combobox
          items={paidByOptions}
          value={paidBy}
          onValueChange={setPaidBy}
        >
          <ComboboxInput 
            placeholder="" 
            className="w-fit min-w-0 focus-within:ring-0 focus-within:border-input has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-input [&_input]:flex-none [&_input]:w-[100px]"
            readOnly
          />
          <ComboboxContent>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <Button className="bg-app-primary text-black">Next</Button>
      </div>
    </div>
  );
}
