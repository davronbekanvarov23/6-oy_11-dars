//components
import { BooksContent } from "../components";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/firebasaConfig";
import { useCollection } from "../hooks/useCollection";

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
  const { data } = useCollection(loader);
  console.log(data);
  return (
    <div className="align-content mt-10">
      <BooksContent />
    </div>
  );
}

export default Home;
