import {BrowswerRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

const App = () => (
    <BrowswerRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/video/:id" element={<ChannelDetail/>}/>
                <Route path="/video/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowswerRouter>
    );

export default App;
