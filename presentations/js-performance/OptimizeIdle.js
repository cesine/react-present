import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import CodeBlock from '../../lib/components/CodeBlock';

const code =
`function init() {
  fetchBitmap().then(
    bitmap => {
      const app = renderApp(bitmap);
    
      const idleCallback = requestIdleCallback ||
        requestAnimationFrame;

      idleCallback(() => {
        fetchAudio().then(
          audio => app.setAudio(audio));
      });
    }    
  );
}

function fetchBitmap() { ... }

function fetchAudio() { ... }`;

export default function() {
  return (
    <Slide>
      <Title>use idle time to pre-fetch</Title>
      <CodeBlock>{ code }</CodeBlock>
    </Slide>);
}
