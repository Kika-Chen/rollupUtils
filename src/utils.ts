export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value};`;
};

export const getCookie = (key: string): string => {
  const items: string[] = document.cookie.split('; ');
  for (let i = 0; i < items.length; i += 1) {
    const item: string[] = items[i].split('=');
    if (key === item[0] && item.length === 2) {
      return decodeURIComponent(item[1]);
    }
  }
  return '';
};

