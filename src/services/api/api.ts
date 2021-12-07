

// API for form
export const postForm = async (url: string, formData: any)=> {
  const response = await fetch(url,{
    method:'POST',
    body: JSON.stringify(formData),
    headers:{
      'Content-Type': 'application/json'
    }})
  const prediction = await response.json()
  return prediction
}

// API for correlation chart
export const getCorrelation = async (url: string) =>{
  const response = await fetch(url,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    }})

    const correlation = await response.json()

    return correlation
}

// API for Feature Chart
export const getFeatures = async (url: string) =>{
  const response = await fetch(url,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    }})

    const feature = await response.json()

    return feature
}

// API for population pie chart
export const getPopulation = async (url: string) =>{
  const response = await fetch(url,{
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    }})

    const pop = await response.json()

    return pop
}