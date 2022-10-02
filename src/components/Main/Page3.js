import { useState } from "react";
import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const Page3 = ({ setPage }) => {
  const iconClasses = "h-8 w-8";
  const workspaces = [
    {
      title: "For myself",
      description: "Write better. Think more clearly. Stay organized.",
      Icon: <UserIcon className={iconClasses} />,
    },
    {
      title: "With my team",
      description: "Wikis, docs, tasks & projects, all in one place.",
      Icon: <UserGroupIcon className={iconClasses} />,
    },
  ];
  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

  const clickHandler = (e) => {
    e.preventDefault();
    setPage((p) => p + 1);
  };

  return (
    <div className="space-y-4">
      <div className="pt-0 md:pt-4 pb-4 md:pb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-base-content/90 text-center">
          How are you plannning to use Eden?
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-medium text-base-content/60 text-center">
          We'll streamline your setup experience accordingly.
        </p>
      </div>

      <div className="p-4 max-w-lg mx-auto flex flex-col gap-6">
        <div className="flex gap-4 md:gap-8">
          {workspaces.map((ws, index) => (
            <div
              onClick={(e) => {
                setSelectedWorkspace(ws);
              }}
              key={ws.title}
              className={`flex flex-col gap-4 rounded-lg p-4 lg:p-6 cursor-pointer ring-1 ${
                selectedWorkspace.title === ws.title
                  ? "ring-primary"
                  : "ring-base-300"
              }`}
            >
              <div
                className={
                  selectedWorkspace.title === ws.title
                    ? "text-primary"
                    : "text-base-content/80"
                }
              >
                {ws.Icon}
              </div>
              <p className="font-bold">{ws.title}</p>
              <p className="text-sm md:text-base">{ws.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={clickHandler}
          className="btn btn-lg btn-primary btn-block normal-case mt-2 lg:mt-4"
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default Page3;
