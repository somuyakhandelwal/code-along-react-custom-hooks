import React from 'react';
import './App.css';
import useStorage from './useStorage';

function App() {
  const [contents, SetContent] = useStorage('content','')
  return (
    <>
      <input type="text" value={contents} onChange={e=>SetContent(e.target.value)}></input>
    </>
  );
}

export default App;