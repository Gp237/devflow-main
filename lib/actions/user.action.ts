import { fetchAPI } from "@/lib/fetch";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface UpdateProfileData {
  name?: string;
  email?: string;
  avatar?: string;
}

/**
 * Fetch user profile by ID
 */
export const getUserById = async (userId: string): Promise<User> => {
  const response = await fetchAPI(`/users/${userId}`, {
    method: "GET",
  });
  return response.json();
};

/**
 * User login
 */
export const loginUser = async (data: LoginData): Promise<{ token: string; user: User }> => {
  const response = await fetchAPI("/auth/login", {
    method: "POST",
    body: data,
  });
  return response.json();
};

/**
 * User registration
 */
export const registerUser = async (data: RegisterData): Promise<{ token: string; user: User }> => {
  const response = await fetchAPI("/auth/register", {
    method: "POST",
    body: data,
  });
  return response.json();
};

/**
 * Update user profile
 */
export const updateUserProfile = async (
  userId: string,
  data: UpdateProfileData
): Promise<User> => {
  const response = await fetchAPI(`/users/${userId}`, {
    method: "PUT",
    body: data,
  });
  return response.json();
};

/**
 * Delete user account
 */
export const deleteUser = async (userId: string): Promise<{ message: string }> => {
  const response = await fetchAPI(`/users/${userId}`, {
    method: "DELETE",
  });
  return response.json();
};
