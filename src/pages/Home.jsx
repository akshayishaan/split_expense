import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import { Group } from "../components/Group";
import { SplitSummary } from "../components/SplitSummary";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import Header from "./HeaderMVP";

export function Home() {
  const scrollRef = useRef(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (!scrollElement) return;

    const handleScroll = () => {
      setShowShadow(scrollElement.scrollTop > 0);
    };

    scrollElement.addEventListener("scroll", handleScroll);
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div className="flex flex-col w-screen h-screen">
        <Header>
          <Header.Main>
            <div className="flex border-b border-gray-200 gap-2 items-center bg-app-primary space-between">
              <Avatar className="h-full w-14">
                <AvatarImage src="/profile.svg" />
              </Avatar>
              <h1 className="font-bold text-2xl">Binit</h1>
            </div>
            <h3 className="ml-auto">Hey, Good to see you again!</h3>
          </Header.Main>
        </Header>

        <div className={`${showShadow ? "shadow-md z-10 relative" : ""}`}>
          <SplitSummary />
        </div>

        <ScrollArea ref={scrollRef}>
          <div className="flex flex-col flex-grow min-h-0 bg-app-primary-light">
            <h2 className="text-2xl py-2 px-4 font-semibold">Groups & chats</h2>
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
          </div>
        </ScrollArea>

        <div className="btn p-4 mt-auto">
          <Button className="w-full h-12 bg-app-primary text-black text-xl rounded-xl shadow-xl">
            CREATE NEW GROUP
          </Button>
        </div>
      </div>
    </Container>
  );
}
