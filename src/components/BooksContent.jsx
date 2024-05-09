import { useEffect, useState } from "react";
import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";

import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";

function BooksContent() {
  const [layoutState, setLayoutState] = useState("grid");
  const activeStyle = "btn btn-circle ";

  return (
    <>
      <div className="mb-5 border-b py-3 flex justify-between items-center">
        <h3 className="font-medium text-2xl">10 books</h3>
        <div className="flex gap-3">
          <button className={activeStyle} id="grid">
            <TbLayoutGrid className="w-7 h-7" />
          </button>
          <button className={activeStyle} id="list">
            <TbLayoutList className="w-7 h-7" />
          </button>
        </div>
      </div>
      <BooksGrid />
      <BooksList />
    </>
  );
}

export default BooksContent;
