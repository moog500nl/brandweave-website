import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import path from 'path';
import App from './src/App';

const routes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/blog/browser-becomes-buyer',
  '/blog/amazons-agent-bet',
];

const template = fs.readFileSync(path.resolve('./dist/index.html'), 'utf-8');

routes.forEach((route) => {
  const appHtml = renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>
  );

  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const filePath = route === '/' 
    ? path.resolve('./dist/index.html')
    : path.resolve(`./dist${route}/index.html`);

  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, html);
  console.log(`Prerendered: ${route}`);
});
