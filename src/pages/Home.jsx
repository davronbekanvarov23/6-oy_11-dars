import React from "react";
import { db } from "../firebase/firebasaConfig";

//components
import { BooksContent } from "../components";
import { collection, onSnapshot } from "firebase/firestore";

export const loader = async () => {
  const books = [];

  onSnapshot(collection(db, "myBook"), (snapshot) => {
    snapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() });
    });
  });
  return books;
};

function Home() {
  return (
    <div className="align-content mt-10">
      <BooksContent />
    </div>
  );
}

export default Home;
