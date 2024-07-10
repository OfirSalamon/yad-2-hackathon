import buildUrl from "./build-url";

interface RequestConfig extends RequestInit {
  body?: any;
  params?: Record<string, any>;
}

const makeRequest = async <T>(
  route: string,
  config?: RequestConfig
): Promise<T> => {
  const { params, body } = config ?? {};
  const url = buildUrl(route, params);
  const options: RequestInit = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    } else {
      const text = await response.text();
      try {
        const { data } = JSON.parse(text);
        return data;
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};

export default makeRequest;
