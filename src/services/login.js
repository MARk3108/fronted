import axios from "axios";
// Сервис для авторизации 
const BASE_URL="http://213.171.4.235:8082/api/token/";  //сюда вставить ссылку 
const LoginServices = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}`, { email, password });
      const { refresh, access } = response.data; // Получаем оба токена из ответа

      // Сохраняем оба токена в localStorage
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('accessToken', access);

      return { refresh, access }; // Возвращаем оба токена
    } catch (error) {
      console.log("Login Failed:", error);
      debugger;
      throw new Error("Login Failed");
    }
  },
  getRefreshTokenFromLocalStorage: () => {
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken;
  },
  getAccessTokenFromLocalStorage: () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
  }
};



export default LoginServices;

