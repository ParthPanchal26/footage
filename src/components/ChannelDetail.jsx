import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

const ChannelDetail = () => {

  const [channelDetails, setChannelDetails] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])
  const { id } = useParams()

  console.log(channelDetails)
  console.log(channelVideos)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetails(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setChannelVideos(data?.items))


  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(8,4,33,1) 0%, rgba(171,0,255,1) 0%, rgba(255,0,69,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop='-120px' />
      </Box>
      <Box display="flex" p='2' style={{textAlign: "center"}}>
        <Box sx={{ mr: { sm: '30px' } }} />
          <Videos videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail