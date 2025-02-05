export const fetchAPI = async (
    endpoint: string,
    {
      method = "GET",
      headers = {},
      body,
      params,
    }: {
      method?: string;
      headers?: { [key: string]: string };
      body?: any;
      params?: { [key: string]: any };
    } = {}
  ) => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  
    // Ajouter les paramètres à l'URL si nécessaire
    const url = new URL(endpoint, baseURL);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value.toString());
        }
      });
    }
  
    try {
      const response = await fetch(url.toString(), {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
  
      // Gérer les erreurs HTTP
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `HTTP error! status: ${response.status}`
        );
      }
  
      // Retourner la réponse au format JSON
      return response;
    } catch (error: any) {
      console.error(`Error fetching ${url}:`, error.message);
      throw error;
    }
  };