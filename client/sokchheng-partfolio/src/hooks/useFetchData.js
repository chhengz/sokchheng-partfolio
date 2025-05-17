import { useEffect, useState } from "react";
import { fetchData, fetchProject } from "../utils/api";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData();
        setData(res);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading };
};


const useFetchProject = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchProject();
        setData(res);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading };
}

export default useFetchData;
