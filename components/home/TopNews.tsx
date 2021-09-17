import { useState, useEffect } from "react";
import TopNewsCard from "./TopNewsCard";
import { News } from "../../utils/types";
import { useSettings } from "../../utils/SettingsProvider";
import { API_KEY } from "../../utils/config";
import { Skeleton, Typography } from "antd";

const { Title } = Typography;

const rawData = [
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      'Day 2 Of Raids On Actor Sonu Sood, Shiv Sena Slams "Talibani" Mindset - NDTV',
    description:
      "Income Tax officials arrived at actor Sonu Sood's home in Mumbai this morning, after raids at his offices that ended late last night. Taxmen are investigating Sonu Sood's property deal with a Lucknow-based real estate company.",
    url:
      "https://www.ndtv.com/india-news/tax-officials-at-actor-sonu-soods-mumbai-home-day-after-raids-at-offices-that-ended-late-at-night-2542602",
    urlToImage:
      "https://c.ndtvimg.com/2021-09/d2plu9do_sonu-sood-afp_625x300_16_September_21.jpg",
    publishedAt: "2021-09-16T08:23:00Z",
    content:
      "Sonu Sood won wide praise for his charity work during the pandemic.\r\nNew Delhi: Income Tax officials arrived at actor Sonu Sood's home in Mumbai this morning, after raids at his offices that ended la… [+2007 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "2 Boys Find Over Rs 900 Crore Credited Into Their Bank Accounts In Bihar - NDTV",
    description:
      "Residents of a village in Bihar's Katihar rushed to ATMs and banks to check their account statement. The reason? Two schoolchildren suddenly found their accounts laden with crores of rupees overnight.",
    url:
      "https://www.ndtv.com/india-news/2-boys-find-over-rs-900-crore-credited-into-their-bank-accounts-in-bihar-2542781",
    urlToImage:
      "https://c.ndtvimg.com/2021-09/rgooplio_katihar_625x300_16_September_21.jpg",
    publishedAt: "2021-09-16T07:57:08Z",
    content:
      "The bank in Bihar's Katihar has said it was due to a system glitch\r\nPatna: Residents of a village in Bihar's Katihar rushed to ATMs and banks to check their account statement. The reason? Two schoolc… [+1694 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "PM Slams Central Vista Critics As He Inaugurates New Defence Offices - NDTV",
    description:
      "Prime Minister Narendra Modi on Thursday morning inaugurated new Defence Ministry offices in Delhi and, as he did so, he took a swipe at the opposition over the contentious Central Vista project.",
    url:
      "https://www.ndtv.com/india-news/pm-modi-slams-central-vista-critics-as-he-inaugurates-new-defence-offices-2542737",
    urlToImage:
      "https://c.ndtvimg.com/2021-09/v1t713vs_pm-modi_625x300_16_September_21.jpg",
    publishedAt: "2021-09-16T07:18:45Z",
    content:
      "PM Modi was speaking at the inauguration of new Defence Ministry offices in Delhi\r\nNew Delhi: Prime Minister Narendra Modi on Thursday morning inaugurated new Defence Ministry offices in Delhi and, a… [+4161 chars]",
  },
  {
    source: {
      id: null,
      name: "Moneycontrol",
    },
    author: null,
    title:
      "Delhi reported maximum rape cases, murders among metros in 2020: NCRB data - Moneycontrol",
    description:
      "Altogether, 1,849 murder cases and 2,533 rape cases were reported across the country in 2020, a year that witnessed COVID-19 outbreak and lockdowns, the National Crime Records Bureau (NCRB) data showed.",
    url:
      "https://www.moneycontrol.com/news/india/delhi-reported-maximum-rape-cases-murders-among-metros-in-2020-ncrb-data-7473031.html",
    urlToImage:
      "https://images.moneycontrol.com/static-mcnews/2018/06/rape-770x361.jpg",
    publishedAt: "2021-09-16T06:32:38Z",
    content:
      "Delhi accounted for nearly 40 percent of all rape cases and almost 25 percent murder cases among 19 metropolitan cities in India in 2020, according to latest government data.\r\nAltogether, 1,849 murde… [+2167 chars]",
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "WSJ",
    title:
      "Finding a good children’s mask is even harder this fall as the Delta variant surges - Livemint",
    description:
      "Many popular masks sell out quickly; Delta has rendered the ubiquitous cloth masks less effective",
    url:
      "https://www.livemint.com/science/health/finding-a-good-children-s-mask-is-even-harder-this-fall-as-the-delta-variant-surges-11631717986475.html",
    urlToImage:
      "https://images.livemint.com/img/2021/09/15/600x338/ECUADOR-HEALTH-VIRUS-VACCINES-TEENAGERS-0_1631610602731_1631718250278.jpg",
    publishedAt: "2021-09-16T06:30:30Z",
    content:
      "Masks for children are in high demand as schools resume, and for parents, the task of finding suitable ones is tough.\r\nMany of the most popular masks are selling out quickly as parents look to upgrad… [+5200 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "PTI",
    title:
      "I can say that old Yuzi is back, asserts Yuzvendra Chahal ahead of IPL - Times of India",
    description:
      'Cricket News:  "The old Yuzi is back," said a confident looking Royal Challengers Bangalore spinner, Yuzvendra Chahal after finishing nets in Dubai and added that h',
    url:
      "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2021-happy-with-the-way-i-bowled-says-rcb-spinner-yuzvendra-chahal/articleshow/86254013.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-86254319,width-1070,height-580,imgsize-35800,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2021-09-16T06:15:00Z",
    content:
      "Bold Diaries: Yuzi and Maxwells Day Out Yuzvendra Chahal was back in the thick of things, and Glenn Maxwell was https://t.co/sJTRn9e1qo\r\n— Royal Challengers Bangalore (@RCBTweets) 1631763000000",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      'Hyderabad Rape-Murder Accused Found Dead 2 Days After "Encounter" Threat - NDTV',
    description:
      "A man found dead on railway tracks could be the suspect in the rape and murder of a six-year-old girl in Hyderabad, the police said today.",
    url:
      "https://www.ndtv.com/india-news/hyderabad-6-year-olds-rape-murder-accused-found-dead-on-rail-tracks-two-days-after-ministers-encounter-warning-2542643",
    urlToImage:
      "https://c.ndtvimg.com/2021-09/o3j3ijgg_hyderabad-rapemurder-case_625x300_16_September_21.jpg",
    publishedAt: "2021-09-16T06:11:15Z",
    content:
      "Hyderabad Rape-Murder: Telangana police confirmed the news, sharing images of man's body.\r\nHyderabad: A man found dead on railway tracks could be the suspect in the rape and murder of a six-year-old … [+3146 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TIMESOFINDIA.COM",
    title:
      "Athlete and model Manoj Patil attempts suicide after blaming Bollywood actor Sahil Khan for harassment - Times of India",
    description:
      "Athlete and model Manoj Patil allegedly attempted to end his life by consuming sleeping pills at his residence in O",
    url:
      "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/athlete-and-model-manoj-patil-attempts-suicide-after-blaming-bollywood-actor-sahil-khan-for-harassment/articleshow/86253791.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-86253900,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-63036/86253900.jpg",
    publishedAt: "2021-09-16T06:04:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Auto DeskHT Auto Desk",
    title:
      "Ola Electric S1 e-scooters worth ₹600 crore sold in a single day - HT Auto",
    description:
      "Ola Electric S1 scooter has received a massive response since reservations and purchase windows were opened online..Thursday is the last day in the ongoing phase of purchase for Ola S1 and Ola S1 Pro trims.",
    url:
      "https://auto.hindustantimes.com/auto/two-wheelers/ola-electric-sells-scooters-worth-rs-600-crore-in-one-day-41631771929414.html",
    urlToImage:
      "https://images.hindustantimes.com/auto/img/2021/09/16/600x338/Ola_Electric_Scooter_1_1626348663553_1631772036216.jpg",
    publishedAt: "2021-09-16T06:02:08Z",
    content:
      "Ola Electric has reported a mammoth response to its decision to open purchase window for its S1 and S1 Pro range of electric scooters. CEO Bhavish Aggarwal took to Twitter to announce that Ola Electr… [+2110 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Booster Dose Can Slash Rates Of Covid Infection, Says Israeli Study - NDTV",
    description:
      "A third dose of the Pfizer Inc.-BioNTech SE Covid vaccine can dramatically reduce rates of Covid-related illness in people 60 and older, according to data from a short-term study in Israel.",
    url:
      "https://www.ndtv.com/world-news/coronavirus-booster-dose-can-slash-rates-of-covid-infection-says-israeli-study-2542629",
    urlToImage:
      "https://c.ndtvimg.com/2021-09/4rq9aes_covid-vaccine-generic-bloomberg_625x300_06_September_21.jpg",
    publishedAt: "2021-09-16T05:55:49Z",
    content:
      "Third Pfizer Covid vaccine dose can dramatically reduce rates of Covid-related illness, study said.\r\nA third dose of the Pfizer Inc.-BioNTech SE Covid vaccine can dramatically reduce rates of Covid-r… [+3132 chars]",
  },
];

const TopNews = (): JSX.Element => {
  const [topNews, setTopNews] = useState<News[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { country, setCountry } = useSettings();

  useEffect(() => {
    async function fetchTopNews() {
      setLoading(true);
      setError(false);
      console.log(country);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&sortBy=popularity&pageSize=5`
      );

      if (response.ok) {
        const data = await response.json();
        // const data =  rawData;
        setTopNews(data.articles);
      } else {
        setError(true);
      }

      // setTopNews(rawData);

      setLoading(false);
    }
    fetchTopNews();
  }, [country]);

  if (loading) {
    return (
      <>
        {[...Array(10)].map((i, index) => {
          return <Skeleton key={index} />;
        })}
      </>
    );
  }

  return (
    <>
      <div className="section__title">
        <hr />
        <Title className="section__title-text" level={4}>
          TOP NEWS
        </Title>
      </div>

      {topNews?.map((newsItem: News, index: number) => {
        return <TopNewsCard key={index} newsItem={newsItem} />;
      })}
    </>
  );
};

export default TopNews;
