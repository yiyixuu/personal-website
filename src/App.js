import * as React from 'react';
import './App.css';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function App() {
  return (
    <div className="centered-container">
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="github" onClick={() => {window.open('https://github.com/yiyixuu')}}>
          <GitHubIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label="linkedin" onClick={() => {window.open('https://www.linkedin.com/in/yiyi-xuu/')}}>
          <LinkedInIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label="resume">
          <TextSnippetIcon fontSize='large' />
        </IconButton>
      </Stack>
    </div>
  );
}