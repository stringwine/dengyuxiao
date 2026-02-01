
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  // 确保在渲染前容器是空的
  if (container.querySelector('.loading-state')) {
    container.innerHTML = '';
  }
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Portfolio System: Online");
} else {
  console.error("Critical: UI Root not found.");
}
