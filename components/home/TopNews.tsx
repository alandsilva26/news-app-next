import useFetchNews from "../../utils/useFetchNews";
import { useSettings } from "../../utils/SettingsProvider";
import Skeletons from "../Skeletons";
import NewsList from "../NewsList";

const TopNews = (): JSX.Element => {
  const { country } = useSettings();

  const { data, loading, error } = useFetchNews(country, 10);

  if (loading) {
    return <Skeletons size={10} />;
  }

  if (error) {
    return <h2>There was an error</h2>;
  }

  return (
    <>
      <NewsList
        title="Top News"
        data={data}
        loading={loading}
        error={error}
        pageSize={10}
      />
    </>
  );
};

export default TopNews;
