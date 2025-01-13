import { CheckCircle } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"

import { Videos } from './'
import { fetchFromAPI } from "../utils/fetchFromApi"

const VideoDetail = () => {

  const { id } = useParams()

  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetails(data?.items?.[0])
      })

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])


  if (!videoDetails) return 'Loading ...'

  const { snippet: { channelId, title, channelTitle, description
  }, statistics: { viewCount, likeCount, commentCount, } } = videoDetails

  return (
    <Box height="full">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography margin={1} color="#fff" variant="h5" fontWeight="bold" >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between"
              sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography alignItems="center" color="#fff" variant={{ sm: 'subtitle1', md: 'h6' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="30px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} videoDirection="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail