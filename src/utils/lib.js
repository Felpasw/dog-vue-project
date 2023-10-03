import axios from "axios";


export async function getRandomDogsImageAndName(){
    let promiseResponsesDogs = []

    for (let index = 0; index < 21; index++) {
         promiseResponsesDogs.push(axios.get('https://dog.ceo/api/breeds/image/random'))  
    }

    const responsesDogs = await Promise.all(promiseResponsesDogs)
    const responseNames = await axios.get('https://random-data-api.com/api/v2/users?size=21')

    const dogsUrls = responsesDogs.map((dogResponse)=>{
        return dogResponse.data.message
    })

    const dogsObjects = responseNames.data.map((element, index) => {
        return {
          id: index,
          name: element.first_name,
          dogUrl: dogsUrls[index]
        };
      });
      

    return dogsObjects

}