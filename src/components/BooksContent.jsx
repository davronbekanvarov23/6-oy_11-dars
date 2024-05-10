import React, { useState } from "react";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";
import BooksGrid from "./BooksGrid"; // Assuming you have separate components for grid and list
import BooksList from "./BooksList";

function BooksContent() {
  const [layoutState, setLayoutState] = useState("grid");

  const activeStyle = (layout) => {
    return layoutState === layout
      ? "btn btn-circle bg-red"
      : "btn btn-circle bg-blue";
  };

  const handleLayoutChange = (layout) => {
    setLayoutState(layout);
  };

  return (
    <>
      <div className="mb-5 border-b py-3 flex justify-between items-center">
        <h3 className="font-medium text-2xl">10 books</h3>
        <div className="flex gap-3">
          <button
            className={activeStyle("grid")}
            onClick={() => handleLayoutChange("grid")}
            id="grid"
          >
            <TbLayoutGrid className="w-7 h-7" />
          </button>
          <button
            className={activeStyle("list")}
            onClick={() => handleLayoutChange("list")}
            id="list"
          >
            <TbLayoutList className="w-7 h-7" />
          </button>
        </div>
      </div>
      {layoutState === "grid" ? <BooksGrid /> : <BooksList />}
    </>
  );
}

export default BooksContent;
