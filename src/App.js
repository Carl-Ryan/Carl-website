import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>欢迎光临Cyrus的科技小站</h1>
      <div className="project">
        <h2>ChatGPT-Next-Web</h2>
        <p>这是一个ChatGPT网页用户界面。它的设计精美，用户体验优秀，支持Markdown格式，包括LaTex、mermaid、代码高亮等。它还支持响应式设计，深色模式和PWA，【测试密钥：3sX8rT6yU1vB7n】。</p>
        <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
        <a href="https://pan.baidu.com/s/1mR6mT0IETcfs5fXT1jSe5Q?pwd=pw9b" className="button">查看教程</a>
      </div>
      <div className="project">
        <h2>go-proxy-bingai</h2>
        <p>这是一个微软New Bing演示站点，拥有一致的UI体验，支持ChatGPT提示词，国内可用。它基本兼容微软Bing AI的所有功能，无需登录即可畅聊。</p>
        <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
        <a href="https://pan.baidu.com/s/1lO7cp3YmuGJe2IwZar0wCQ?pwd=fb2o" className="button">查看教程</a>
      </div>
    </div>
  );
}

export default App;
