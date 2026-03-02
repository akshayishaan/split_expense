import { Link } from "react-router";
import Container from "./components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ScrollArea } from "./components/ui/scroll-area";
import { Group } from "./components/Group";
import { Button } from "./components/ui/button";

export function SplitSummaryDetails() {
  return (
    <Container>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-start gap-4 ex-sum p-4 items-center bg-app-primary">
          <div className="h-6 w-6">
            <Link to="/home">
              <img className="" src="/back-arrow.svg" />
            </Link>
          </div>
          <h1 className="text-2xl">Expense Summary</h1>
        </div>

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
        <div className="flex flex-col bg-app-primary-light p-2 pb-0">
          <Tabs defaultValue="Groups" className="w-full">
            <TabsList className="w-full flex bg-app-secondary sticky">
              <TabsTrigger className="w-1/2" value="Groups">
                Groups
              </TabsTrigger>
              <TabsTrigger className="flex-grow" value="People">
                People
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Groups"
              className="flex flex-col h-100vh overflow-hidden"
            >
              <ScrollArea className=" bg-app-primary-light">
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
