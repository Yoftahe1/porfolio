import {useEffect,useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fire";
const useFetchWorks = () => {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    async function getCollection() {
      const querySnapshot = await getDocs(collection(db, "websites"));
      let newWebsites = [];
      querySnapshot.forEach((doc) => {
        newWebsites.push(doc.data());
      });
      setWebsites(newWebsites);
    }
    getCollection();
  }, []);
  return websites
}

export default useFetchWorks