import React from 'react';
import Box from '@material-ui/core/Box';
import ApiKeyFrom from './components/ApiKeyFrom';

export default function () {
  return (
    <div className="wrap">
      <h1>Settings</h1>

      <Box mt={1.5}>
        <ApiKeyFrom />
      </Box>
    </div>
  );
}
