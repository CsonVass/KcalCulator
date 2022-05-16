const axios = require('axios');

export function postEmail(address, subject, body){
    try{ 
        const promise = axios.post(`http://kcalculator.localhost/publish`, {
                toEmail: address,
                subject: subject,
                body: body

            });
        const dataPromise = promise.then((respone) => respone.data)  
        return dataPromise;            
    }catch (error) {
        console.log(error.response)
      }
}
