﻿import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'URLencoded' },
});

export default instance;
