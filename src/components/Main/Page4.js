import { CheckIcon } from "@heroicons/react/24/solid";

const Page4 = ({ name = "Eren" }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <CheckIcon className="h-16 w-16 rounded-full bg-primary text-primary-content p-4 mb-8 lg:mb-14" />
      <h1 className="text-2xl md:text-4xl font-semibold text-base-content/90 text-center">
        Congratulation, {name}!
      </h1>
      <p className="text-sm md:text-lg lg:text-xl font-medium text-base-content/60 text-center">
        You have completed onboarding, you can start using the Eden!
      </p>
      <div className="w-full max-w-lg mx-auto mt-4">
        <button className="btn btn-lg btn-primary btn-block normal-case mt-2 lg:mt-4">
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default Page4;
