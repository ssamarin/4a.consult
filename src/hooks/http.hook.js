function useHttp() {
  const request = async (url = 'https://t-pay.iqfit.app/subscribe/list-test', method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  return { request };
}

export default useHttp;
