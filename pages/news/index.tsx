import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSettings } from "../../utils/SettingsProvider";
import type { NextPage } from "next/types";
import { API_KEY } from "../../utils/config";
import { News } from "../../utils/types";
import Skeletons from "../../components/Skeletons";
import { Typography, Space } from "antd";
import NewsList from "../../components/NewsList";

const { Title } = Typography;

interface QueryParams {
  search_query?: string | undefined;
}

const Search: NextPage = () => {
  const [data, setData] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const pageSize = 20;

  const router = useRouter();

  const { country } = useSettings();

  const { search_query }: QueryParams = router.query;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);

      let url = `https://newsapi.org/v2/everything?q=${search_query}&apiKey=${API_KEY}&pageSize=${pageSize}`;

      const response = await fetch(url);

      console.log(response);

      if (response.ok) {
        const data = await response.json();

        setData(data.articles);

        setError(false);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    }

    if (search_query) {
      fetchData();
    }
  }, [country, search_query]);

  if (loading || !search_query) {
    return <Skeletons size={pageSize} />;
  }

  return (
    <>
      <NewsList
        title={`Results for ${search_query}`}
        search={search_query}
        data={data}
        loading={loading}
        error={error}
        pageSize={pageSize}
      />
    </>
  );
};

export default Search;
