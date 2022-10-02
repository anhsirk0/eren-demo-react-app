const Page2 = ({ setPage }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setPage((p) => p + 1);
  };

  return (
    <div className="space-y-4">
      <div className="pt-0 md:pt-4 pb-2 md:pb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-base-content/90 text-center">
          Let’s set up a home for all your work
        </h1>
        <p className="text-sm md:text-lg lg:text-xl font-medium text-base-content/60 text-center">
          You can always create another workspace later.
        </p>
      </div>

      <form
        onSubmit={submitHandler}
        className="p-4 max-w-lg mx-auto flex flex-col gap-6"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text lg:text-lg font-medium">
              Workspace Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Eden"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text lg:text-lg font-medium">
              Workspace URL
              <span className="text-base-content/50"> (Optional)</span>
            </span>
          </label>
          <label className="input-group">
            <span>www.eden.com/</span>
            <input
              type="text"
              placeholder="Example"
              className="input input-bordered w-full"
            />
          </label>
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

export default Page2;
