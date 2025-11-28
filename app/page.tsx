import { cn } from "@/lib/utils";

const Page = () => {
  const secondary = true;
  return (
    <div
      className={cn(
        "text-pink-400",
        secondary && "text-red-500"
      )}>
      Hello World
    </div>
  );
};

export default Page;
