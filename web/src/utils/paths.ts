const basePath = import.meta.env.BASE_URL || '/';

export const withBase = (path: string): string => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (!clean) return basePath;
  return `${basePath}${clean}`;
};
