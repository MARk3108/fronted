import axios from "axios";
// Сервис для авторизации 
const BASE_URL="";  //сюда вставить ссылку 

const LoginServices={
  login:async(selectedStation,username,password)=>{
    try{
     
      const response=await axios.post(`${BASE_URL}/login`,{selectedStation,username,password}); // постим 
      const { token } =response.data;
      //сохраняем наш токен 
      localStorage.setItem('token',token);
      return token;
      
    }catch(error){
      console.log("Login Failed:",error);
      // eslint-disable-next-line no-debugger
      debugger;
      throw new Error("Login Failed");
     
    }
    
   

   
  },
}


export default LoginServices;

