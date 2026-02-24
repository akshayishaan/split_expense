import { Avatar, AvatarImage } from "./ui/avatar";

export function Group(props) {
  return (
    <div className="flex items-center justify-center p-4 border bg-background ml-2 mr-2">
      <div className="flex items-center justify-center gap-1">
        <Avatar className="h-14 w-14">
          <AvatarImage src="/profile.svg" />
        </Avatar>
        <div className="flex flex-col">
          <h4 className="font-bold text-lg">{props.name}</h4>
          <p className="text-sm text-gray-500">Last message preview...</p>
        </div>
      </div>
      <div className="ml-auto self-start">
        <span>12:52</span>
      </div>
    </div>
  );
}
