export function url(path: string): string {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL; // "/dimgrig/" и в dev, и в prod
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}