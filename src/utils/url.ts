export function url(path: string): string {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;

  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}