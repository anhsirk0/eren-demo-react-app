import { useState, Fragment } from "react";
import Logo from "../../images/logo.png";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const Main = () => {
  const totalPages = 4;
  const [page, setPage] = useState(0);
  const [name, setName] = useState("Eren");

  return (
    <div className="mt-8 lg:pt-12 2xl:pt-16 flex flex-col gap-8 items-center">
      <div className="flex items-center gap-2 md:gap-4">
        <img alt="logo" src={Logo} className="h-8 md:h-10 w-8 md:w-10" />
        <p className="font-semibold text-3xl md:text-4xl">Eden</p>
      </div>

      <ul className="my-4 md:my-8 p-4 flex items-center text-lg md:text-xl font-semibold">
        {[...Array(totalPages).keys()].map((p) => (
          <Fragment key={p}>
            {p !== 0 && (
              <div
                className={`h-0.5 w-5 md:w-8 lg:w-10 ${
                  p <= page ? "bg-primary" : "bg-base-300"
                }`}
              />
            )}
            <li
              /* onClick={(e) => { */
              /*   setPage(p); */
              /* }} */
              className={`h-10 md:h-12 w-10 md:w-12 rounded-full flex items-center justify-center ${
                p <= page
                  ? "bg-primary text-primary-content"
                  : "border border-base-300 cursor-pointer text-base-content/60"
              }`}
            >
              {p + 1}
            </li>
            {p !== totalPages - 1 && (
              <div
                className={`h-0.5 w-5 md:w-8 lg:w-10 ${
                  p <= page ? "bg-primary" : "bg-base-300"
                }`}
              />
            )}
          </Fragment>
        ))}
      </ul>

      {page === 0 && <Page1 setPage={setPage} setName={setName} />}
      {page === 1 && <Page2 setPage={setPage} />}
      {page === 2 && <Page3 setPage={setPage} />}
      {page === 3 && <Page4 name={name} />}
    </div>
  );
};

export default Main;
