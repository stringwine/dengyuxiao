
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  // 清除初始加载状态
  container.innerHTML = '';
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Portfolio System: Online and Operational");
} else {
  console.error("Critical Failure: UI Root node not found in DOM.");
}
