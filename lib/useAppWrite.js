/** @format */

import { useEffect, useState } from "react";

const useAppWrite = (param) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await param();
      setData(res);
    } catch (error) {
      Alert.alert("error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();
  return { data, isLoading, refetch };
};

export default useAppWrite;
