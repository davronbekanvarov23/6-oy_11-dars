import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebasaConfig";
import { useState, useEffect } from "react";

export function useCollection() {
  const [data, setdata] = useState();

  useEffect(() => {
    onSnapshot(collection(db, "myBook"), (snapshot) => {
      const books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ id: doc.id, ...doc.data() });
      });
      setdata(books);
    });
  }, []);
  return { data };
}
