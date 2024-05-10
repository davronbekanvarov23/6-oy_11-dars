import { useLoaderData } from "react-router-dom";

function BooksGrid() {
  const data = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10">
      {data.map((info) => {
        return (
          <div
            key={info.id}
            className="card flex gap-5 items-center w-80 font-bold  glass bg-slate-500 p-3 "
          >
            <img src={info.image} alt="" width="200" height="200"/>
            <h1 className=" text-3xl font-bold text-center ">
              <span className=" text-red-400">{info.title}</span>
            </h1>
            <h2 className=" text-2xl">
              Author:
              <span className=" text-yellow-300">{info.author}</span>
            </h2>
            <p>
              Pages:<span className=" text-yellow-300">{info.pages}</span>
            </p>
            <p>
              Cover: <span className=" text-yellow-300">{info.cover}</span>{" "}
            </p>
            <p className="flex">
              genres:
              <span className=" text-yellow-300">{info.genres}</span>
            </p>
            <p>
              description:{" "}
              <span className=" text-yellow-300">{info.description}</span>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BooksGrid;
