import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-18 bg-slate-900 font-roboto text-white">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-page-8395164-6715513.png"
        alt=""
      />
      <Link
        to={"/"}
        className="rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600"
      >
        Back
      </Link>
    </div>
  );
};
export default ErrorPage;
