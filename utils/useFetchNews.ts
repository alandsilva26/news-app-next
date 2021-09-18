import { useState, useEffect } from "react";
import { API_KEY } from "./config";
import { News } from "./types";

const useFetchNews = (
  country?: string,
  pageSize: number = 5,
  search?: string | string[] | undefined
) => {
  const [data, setData] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);

      let url;

      if (search) {
        url = `https://newsapi.org/v2/everything?search=${search}country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&sortBy=popularity&pageSize=${pageSize}`;
      }

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(data.articles);
        setData(data.articles);
      } else {
        setError(true);
      }

      setError(false);
      setLoading(false);
    }

    fetchData();
  }, [country]);

  return { data, loading, error };
};

export default useFetchNews;
