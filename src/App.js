import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Design1Page from './components/Design1Page';
import Design2Page from './components/Design2Page';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/peopleweavefa23" element={<Design1Page />} />
            <Route path="/peopleweavefa23/design1" element={<Design1Page />} />
            <Route path="/peopleweavefa23/design2" element={<Design2Page />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
