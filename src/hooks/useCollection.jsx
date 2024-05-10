// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase/firebasaConfig";
// import { useState } from "react";
// import { useEffect } from "react";

// export function useCollection() {
//   const [data, setdata] = useState(null);

//   useEffect(() => {
//     onSnapshot(collection(db, "myBook"), (snapshot) => {
//       const books = [];
//       snapshot.docs.forEach((doc) => {
//         books.push({ id: doc.id, ...doc.data() });
//       });
//       setdata(books);
//     });
//   }, []);
//   return { data };
// }
