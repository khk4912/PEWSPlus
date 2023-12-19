import React from 'react'
import { createRoot } from 'react-dom/client'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

import Home from './components/Home'

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
html, body {
  background-color: black;
  color: white;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  width: 300px;
  height: 400px;
}
`

const Router = createMemoryRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <div>About</div>
  }
])

function App (): JSX.Element {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root') ?? document.createElement('div')).render(<App />)
