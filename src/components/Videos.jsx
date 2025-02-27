import { Stack, Box } from "@mui/material"
import { ChannelCard, VideoCard } from "./"

const Videos = ({ videos, videoDirection }) => {

    if(!videos?.length) return "loading ... "

    return (
        <Stack
            direction={ videoDirection || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={1}
        >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}


export default Videos