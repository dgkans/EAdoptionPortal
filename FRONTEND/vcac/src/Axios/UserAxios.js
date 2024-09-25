import axios from 'axios'


const URL="http://3.110.178.10:8080/user"

class UserFunctions
{

    login(UserEmailPass) 
    {
       return axios.post(URL+'/login',UserEmailPass)
    }   

    registerAdmin(User)
    {
        return axios.post(URL+'/adminregister',User)
    }

    registerParent(User)
    {
        return axios.post(URL+'/userregister',User)
    }

  
    changePassword(UserEmailPass)
    {
        return axios.post(URL+'/changepassword',UserEmailPass)
    }

    updateprofile(UserEmailPass)
    {
        return axios.put(URL+'/2',UserEmailPass)
    }
}

export default new UserFunctions();
