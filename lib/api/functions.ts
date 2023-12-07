export async function fetchApiResult<T> (url: string, options?: RequestInit): Promise<ApiResult<T>> {
  const res = await fetch(url, options);
  try {
    const data = await res.json();
    if (res.ok) {
      return { data, status: res.status, message: data.message };
    } else {
      return { data, error: data.error, status: res.status };
    }
  }
  catch {
    return { error: 'Unknown error occurred' };
  }
}