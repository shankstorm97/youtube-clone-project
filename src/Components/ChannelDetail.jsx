import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const id = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  // console.log(id);
  // console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`, "statistics").then((data) =>
      // fetchFromAPI(`channels?id=${id}`).then((data) =>
      // setChannelDetail(data?.items)
      // console.log(data.pageInfo.resultsPerPage)
      console.log(data)
    );
    // fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
    fetchFromAPI(`search`).then(
      (data) => console.log(data)
      // (data) => setVideos(data?.items)
    );
  }, [id]);

  // console.log(videos);
  return <div>ChannelDetail</div>;
};

export default ChannelDetail;

// https://youtube-v31.p.rapidapi.com/channels?part=snippet
