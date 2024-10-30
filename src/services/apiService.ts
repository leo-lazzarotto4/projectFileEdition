import axios from 'axios';

const API_URL = "http://localhost:3001";

export const getHello = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

export const getWorkflows = async () => {
  const response = await axios.get(`${API_URL}/workflows`);
  return response.data;
};

export const createWorkflow = async (body: any) => {
  const response = await axios.post(`${API_URL}/workflow`, body);
  return response.data;
};

export const executeWorkflow = async (id: string) => {
  const response = await axios.post(`${API_URL}/workflow/${id}/execute`);
  return response.data;
};

export const statusWorkflow = async (id: string) => {
  const response = await axios.post(`${API_URL}/workflow/${id}/status`);
  return response.data;
};

export const trainModel = async (body: any) => {
  const response = await axios.post(`${API_URL}/model/train`, body);
  return response.data;
};

export const trainStatus = async (id: string) => {
  const response = await axios.get(`${API_URL}/model/${id}/status`);
  return response.data;
};

export const prediction = async (id: string) => {
  const response = await axios.post(`${API_URL}/model/${id}/predict`);
  return response.data;
};

export const deleteWorkflow = async (id: string) => {
  const response = await axios.delete(`${API_URL}/workflow/${id}`);
  return response.data;
};

export const deleteModel = async (id: string) => {
  const response = await axios.delete(`${API_URL}/model/${id}`);
  return response.data;
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/file`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel à uploadFile:", error);
    throw error;
  }
};

