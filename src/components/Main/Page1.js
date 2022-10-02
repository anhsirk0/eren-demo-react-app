const Page1 = ({ setPage, setName }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setPage((p) => p + 1);
  };

  return (
    <div className="space-y-4">
      <div className="pt-0 md:pt-4 pb-4 md:pb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-base-content/90 text-center">
          Welcome! First things first...
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-medium text-base-content/60 text-center">
          You can always change them later.
        </p>
      </div>

      <form
        onSubmit={submitHandler}
        className="p-4 max-w-lg mx-auto flex flex-col gap-6"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text lg:text-lg font-medium">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Linus Torvalds"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text lg:text-lg font-medium">
              Display Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Linus"
            className="input input-bordered w-full"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block normal-case mt-2 lg:mt-4"
        >
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default Page1;
