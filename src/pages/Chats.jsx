import { Link } from "react-router";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import { AmountBar } from "../AmountBar";
import Header from "./HeaderMVP";
import { BackArrow } from "../components/BackArrow";

export function Chats() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header>
        <Header.Main className="pb-2">
          <Link to="/split_summary_details" className="block h-6 w-6 shrink-0">
            <BackArrow className="h-full w-full" />
          </Link>
          <div className="flex items-center gap-2 h-12">
            <Avatar className="h-12 w-12 shrink-0">
              <AvatarImage src="/profile.svg" />
            </Avatar>
            <h1 className="text-xl">Binit</h1>
          </div>
        </Header.Main>
        <Header.Bottom className="p-2 pt-0">
          <AmountBar />
        </Header.Bottom>
      </Header>
      <div className="h-full w-full bg-app-primary-light">
        <ScrollArea className="">scrollArea</ScrollArea>
      </div>
      <div className="gap-2">
        <div className="flex items-center bg-app-primary-light">
          <span className="text-xl ml-auto mb-4 p-2 border-dashed border-4 rounded-3xl">
            <Link to="/set_new_split">Split expense</Link>
          </span>
        </div>
        <div className="flex bg-[#dedede] items-center">
          <input
            type="text"
            placeholder="Enter your amount or chat"
            className="w-full h-20 bg-[#dedede] text-xl ml-4 focus:outline-none"
          />

          <img src="/send.svg" className="h-[60px] mr-4 p-1" />
        </div>
      </div>
    </div>
  );
}
