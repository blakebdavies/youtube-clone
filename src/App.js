import {BrowswerRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";




const App = () => (
    <BrowswerRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />}/>
                <Route path="/channel/:id" element={<ChannelDetail />}/>
                <Route path="/search/:searchTerm" element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowswerRouter>
    );

export default App;
