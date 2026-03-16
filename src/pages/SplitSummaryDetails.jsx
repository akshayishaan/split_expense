import { Link } from "react-router";
import Container from "../components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";
import { Group } from "../components/Group";
import { Button } from "../components/ui/button";
import Header from "./HeaderMVP";
import { BackArrow } from "../components/BackArrow";

export function SplitSummaryDetails() {
  return (
    <Container>
      <div className="flex flex-col w-screen h-screen">
        <Header>
          <Header.Main>
            <Link to="/home" className="block h-6 w-6 shrink-0">
              <BackArrow className="h-full w-full" />
            </Link>
            <div className="flex flex-col justify-center w-full h-10">
              <h1 className="text-2xl">Expense Summary</h1>
            </div>
          </Header.Main>
        </Header>

        <div className=" flex gap-4 p-4 pl-0 items-center bg-app-secondary ">
          <div className="chip w-[0.5em] h-full rounded-r-full bg-red-500"></div>
          <div className="flex flex-col gap-0">
            <h2 className="text-xl">Total Split</h2>
            <h3>your net payable amount</h3>
          </div>
          <div className="flex items-center gap-[0.5em] ml-auto">
            <span className="text-2xl">₹{17500}</span>
            <img
              src="/filled-arrow.svg"
              className="h-[2em] transform -rotate-[135deg] origin-center"
            />
          </div>
        </div>
        <div className="flex flex-col bg-app-primary-light p-2 pb-0 overflow-auto h-100vh ">
          <Tabs defaultValue="Groups" className="w-full  h-100vh">
            <TabsList className="w-full flex bg-app-secondary ">
              <TabsTrigger className="w-1/2" value="Groups">
                Groups
              </TabsTrigger>
              <TabsTrigger className="flex-grow" value="People">
                People
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Groups" className="flex flex-col h-100vh ">
              <ScrollArea className=" bg-app-primary-light  ">
                <div className="flex flex-col gap-2">
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                  <Group name="Akshay" />
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="People"></TabsContent>
          </Tabs>
        </div>
        <div className="btn p-4 mt-auto">
          <Button className="w-full h-12 bg-app-primary text-black text-xl rounded-xl shadow-xl">
            CREATE NEW GROUP
          </Button>
        </div>
      </div>
    </Container>
  );
}
