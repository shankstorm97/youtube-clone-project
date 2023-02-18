import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  // const id = useParams();
  const id = "UCmXmlB4-HJytD7wek0Uo97A";
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: "#3f3f3f", zIndex: "10", height: "300px" }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
