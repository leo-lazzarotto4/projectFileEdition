import {
  getHello as getHelloAPI,
  getWorkflows as getWorkflowsAPI,
  createWorkflow as createWorkflowAPI,
  executeWorkflow as executeWorkflowAPI,
  statusWorkflow as statusWorkflowAPI,
  trainModel as trainModelAPI,
  trainStatus as trainStatusAPI,
  prediction as predictionAPI,
  deleteWorkflow as deleteWorkflowAPI,
  deleteModel as deleteModelAPI,
  uploadFile as uploadFileAPI
} from '../services/apiService';

export default function useApiService() {
  const getHello = async () => {
    try {
      const response = await getHelloAPI();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à getHello:", error);
    }
  };

  const getWorkflows = async () => {
    try {
      const response = await getWorkflowsAPI();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à getWorkflows:", error);
    }
  }

  const createWorkflow = async (body: any) => {
    try {
      const response = await createWorkflowAPI(body);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à createWorkflow:", error);
    }
  };

  const executeWorkflow = async (id: string) => {
    try {
      const response = await executeWorkflowAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à executeWorkflow:", error);
    }
  };

  const statusWorkflow = async (id: string) => {
    try {
      const response = await statusWorkflowAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à statusWorkflow:", error);
    }
  };

  const trainModel = async (body: any) => {
    try {
      const response = await trainModelAPI(body);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à trainModel:", error);
    }
  };

  const trainStatus = async (id: string) => {
    try {
      const response = await trainStatusAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à trainStatus:", error);
    }
  };

  const prediction = async (id: string) => {
    try {
      const response = await predictionAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à prediction:", error);
    }
  };

  const deleteWorkflow = async (id: string) => {
    try {
      const response = await deleteWorkflowAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à deleteWorkflow:", error);
    }
  };

  const deleteModel = async (id: string) => {
    try {
      const response = await deleteModelAPI(id);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à deleteModel:", error);
    }
  };

  const uploadFile = async (file: File) => {
    try {
      const response = await uploadFileAPI(file);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erreur lors de l'appel à uploadFile:", error);
    }
  };

  return {
    getHello,
    getWorkflows,
    createWorkflow,
    executeWorkflow,
    statusWorkflow,
    trainModel,
    trainStatus,
    prediction,
    deleteWorkflow,
    deleteModel,
    uploadFile
  };
}
