import { Link } from "react-router";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import { ScrollArea } from "./components/ui/scroll-area";
import { Amountbar } from "./AmountBar";
import Header from "./HeaderMVP";
import { BackArrow } from "./components/BackArrow";
export function Chats() {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* <div className="flex flex-col  bg-app-primary ">
        <div className="flex flex-start gap-4 ex-sum p-4 pb-2 items-center bg-app-primary">
          <div className="h-6 w-6">
            <Link to="/home">
              <img className="" src="/back-arrow.svg" />
            </Link>
          </div>
          <div className="">
            <Avatar className="h-full w-14">
              <AvatarImage src="/profile.svg" className="h-12" />
            </Avatar>
          </div>
          <h1 className="text-2xl">Binit</h1>
        </div>
        <Amountbar />
      </div> */}
      <Header>
        <Header.Main>
          <div className="h-6 w-6">
            <Link to="/chats">
              <BackArrow className="h-full w-full" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Avatar className="h-full w-14">
              <AvatarImage src="/profile.svg" className="h-12" />
            </Avatar>
            <h1 className="flex-1 text-xl">Binit</h1>
          </div>
        </Header.Main>
        <Header.Bottom>
          <Amountbar />
        </Header.Bottom>
      </Header>
      <div className="h-full w-full bg-app-primary-light">
        <ScrollArea className="">scrollArea</ScrollArea>
      </div>
      <div className="gap-2">
        <div className=" w-35  flex items-center bg-app-primary-light">
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
