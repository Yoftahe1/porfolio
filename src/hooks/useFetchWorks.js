import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fire";
const useFetchWorks = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getCollection() {
      const querySnapshot = await getDocs(collection(db, "websites"));

      let newWebsites = [];
      querySnapshot.forEach((doc) => {
        newWebsites.push(doc.data());
      });
      setIsLoading(false);
      setProjects(newWebsites);
    }
    getCollection();
  }, []);
  return { isLoading, projects };
};

export default useFetchWorks;
