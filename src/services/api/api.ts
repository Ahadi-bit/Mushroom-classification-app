

export const postForm = async (url: string, formData: any)=> {
  const response = await fetch(url,{
    method:'POST',
    body: JSON.stringify(formData),
    headers:{
      'Content-Type': 'application/json'
    }})
  const prediction = await response.json()
  console.log(prediction[1])
  return prediction
}

export const getCorrelation = async (url: string) =>{
  const response = await fetch(url,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    }})

    const correlation = await response.json()

    return correlation
}