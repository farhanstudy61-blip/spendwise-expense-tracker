import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export const getExpenses = async () => {
  return await axios.get(`${API_URL}/expenses`);
};

export const addExpense = async (data) => {
  return await axios.post(`${API_URL}/expenses`, data);
};

export const deleteExpense = async (id) => {
  return await axios.delete(`${API_URL}/expenses/${id}`);
};