const buildUrl = (route: string, params?: Record<string, any>) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(`${baseUrl}${route}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((value) => url.searchParams.append(key, String(value)));
      } else if (value !== undefined && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url;
};

export default buildUrl;
