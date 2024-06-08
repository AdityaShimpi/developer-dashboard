// src/services/api.ts
import { Activity } from '../types';

const API_URL = 'http://localhost:3001/data'; // Replace with your API endpoint

export const fetchData = async (): Promise<Activity[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error: any) { // Explicitly typing 'error' as 'any' to suppress the error
    throw new Error(error.message);
  }
};
