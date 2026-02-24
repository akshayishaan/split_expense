import Container from "./components/Container";
import { Group } from "./components/Group";
import { SplitSummary } from "./components/SplitSummary";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";

export function Home() {
  return (
    <Container>
      <div className="flex flex-col  w-screen h-screen">
        <div className="  flex p-4 border-b border-gray-200 gap-2 items-center bg-app-primary ">
          <Avatar className="h-full w-14">
            <AvatarImage src="/profile.svg" />
          </Avatar>
          <h1 className="font-bold text-2xl">Binit</h1>
          <h3 className="descript p-4 ml-auto">Hey, Good to see you again.</h3>
        </div>
        <SplitSummary />
        <div className=" flex flex-col gap-2 flex-grow min-h-0 bg-app-primary-light">
          <h2 className="text-2xl p-2 font-semibold">Groups & chats</h2>

          <ScrollArea className=" flex flex-col gap-2 flex-grow min-h-0 overflow-y overflow-hidden border-b w-full ">
            <Group name="Binit" />
            <Group name="Dayal" />
            <Group name="Akshay" />
            <Group name="Sonu" />
            <Group name="Bablu" />
            <Group name="Shivam" />
            <Group name="Kamlesh" />
            <Group name="Lizza" />
            <Group name="Gouri" />
            <Group name="Gouri" />
            <Group name="Gouri" />
            <Group name="Gouri" />
          </ScrollArea>
        </div>

        <div className="btn p-4 mt-auto  fixed bottom-5 right-5 ">
          <Button className=" w-full h-12 bg-app-primary text-black text-xl rounded-xl shadow-xl">
            CREATE NEW GROUP
          </Button>
        </div>
      </div>
    </Container>
  );
}
