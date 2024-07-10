// services/api.js

import axios from "axios";

const API_URL = "http://localhost:5001/api";

// User routes
export const register = (userData) =>
  axios.post(`${API_URL}/users/register`, userData);
export const login = (userData) =>
  axios.post(`${API_URL}/users/login`, userData);
export const getAuthUser = () => axios.get(`${API_URL}/users`);

// Book routes
export const getBooks = () => axios.get(`${API_URL}/books`);
export const createBook = (bookData) =>
  axios.post(`${API_URL}/books`, bookData);
export const updateBook = (id, bookData) =>
  axios.put(`${API_URL}/books/${id}`, bookData);
export const deleteBook = (id) => axios.delete(`${API_URL}/books/${id}`);

// BorrowingRecord routes
export const getBorrowingRecords = () =>
  axios.get(`${API_URL}/borrowing-records`);
export const createBorrowingRecord = (recordData) =>
  axios.post(`${API_URL}/borrowing-records`, recordData);
export const updateBorrowingRecord = (id, recordData) =>
  axios.put(`${API_URL}/borrowing-records/${id}`, recordData);
export const deleteBorrowingRecord = (id) =>
  axios.delete(`${API_URL}/borrowing-records/${id}`);

// DigitalResource routes
export const getDigitalResources = () =>
  axios.get(`${API_URL}/digital-resources`);
export const createDigitalResource = (resourceData) =>
  axios.post(`${API_URL}/digital-resources`, resourceData);
export const updateDigitalResource = (id, resourceData) =>
  axios.put(`${API_URL}/digital-resources/${id}`, resourceData);
export const deleteDigitalResource = (id) =>
  axios.delete(`${API_URL}/digital-resources/${id}`);

// Admin login route
export const adminLogin = (adminData) =>
  axios.post(`${API_URL}/admin-login`, adminData);
