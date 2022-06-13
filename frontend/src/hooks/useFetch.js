import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        const data = result.data.contacts;
        setData(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, reFetchData };
};

export default useFetch;
