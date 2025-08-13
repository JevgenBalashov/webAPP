/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

function updateHttpsServerBlock() {
  try {
    const rootDir = process.cwd();
    const nginxRoutesFile = path.join(rootDir, 'next-routes.conf');

    if (!fs.existsSync(nginxRoutesFile)) {
      console.error(`Ошибка: Файл ${nginxRoutesFile} не найден.`);
      return;
    }

    let domain = process.env.NEXT_PUBLIC_SITE_URL;

    if (!domain) {
      console.error('Ошибка: Переменная окружения NEXT_PUBLIC_SITE_URL не определена.');
      process.exit(1);
    }
    domain = domain.replace("https://", "")
    domain = domain.replace("http://", "")
    if (domain.endsWith('/')) {
      domain = domain.slice(0, -1);
    }
    const originalContent = fs.readFileSync(nginxRoutesFile, 'utf8');

    const httpServerBlock = `
server {
    if ($host = ${domain}) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name ${domain};
    return 301 https://$server_name$request_uri;
}
`;

    const httpsServerBlockStart = `
server {
    # SSL configuration
    listen 443 ssl;
    listen [::]:443 ssl;
    ssl_certificate /etc/letsencrypt/live/${domain}/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/${domain}/privkey.pem; # managed by Certbot
    ssl_trusted_certificate /etc/letsencrypt/live/${domain}/chain.pem;

    root /var/www/${domain};

    index qwer.php index.htm index.nginx-debian.html;

    server_name ${domain};
    error_page 404 /404.html;
    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

    # pass PHP scripts to FastCGI server
    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        # fastcgi_pass 127.0.0.1:9000;
    }

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one

    location ~ ^/index\\.html(?:/)?$ {
        try_files /index.html /index.html;
    }

    location ~ ^/prev(?:/)?$ {
        alias /var/www/${domain.replace(/^https?:\/\//, '')}/prev;
        try_files $uri /app.html =404;
    }

    location ~ ^/prev/index\\.html(?:/)?$ {
        rewrite ^(.*\\.html)$ /prev/index.php last;
    }
`;

    const locationRegex = /location ~ \^\/.*?\n}/gs;
    const existingLocationBlocksMatch = originalContent.match(locationRegex);
    const existingLocationBlocks = existingLocationBlocksMatch ? existingLocationBlocksMatch.slice(1).join('\n\n') : '';
    const finalHttpsServerBlock = `${httpsServerBlockStart.trim()}\n\n${existingLocationBlocks.trim()}\n}`;
    const finalContent = `${httpServerBlock.trim()}\n\n${finalHttpsServerBlock}`;

    fs.writeFileSync(nginxRoutesFile, finalContent, 'utf8');
    console.log(
      `Существующие location блоки успешно перемещены в конец второго server-блока в файле ${nginxRoutesFile}`,
    );
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
  }
}

updateHttpsServerBlock();
