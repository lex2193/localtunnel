import localtunnel from 'localtunnel';

(async () => {
  const port = Number.parseInt(process.env.PORT ?? 8000);
  const tunnel = await localtunnel({
    port,
    subdomain: process.env.SUBDOMAIN,
    local_host: process.env.LOCAL_HOST,
    local_https: process.env.LOCAL_HTTPS,
    local_cert: process.env.LOCAL_CERT,
    local_key: process.env.LOCAL_KEY,
    local_ca: process.env.LOCAL_CA,
    allow_invalid_cert: process.env.ALLOW_INVALID_CERT
  });
  console.log(`${tunnel.url} -> ${port}`);
})();
