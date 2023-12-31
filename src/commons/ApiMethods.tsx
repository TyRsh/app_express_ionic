import axios from "axios";
import { useEffect, useState } from "react";

function ApiMethods(url : any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }
    setLoading(true);
    axios.get(url, config)
      .then((response) => {setData(response.data)})
      .catch((err) => {setError(err)})
      .finally(() => {setLoading(false)})
  }, [url])

  const postMethod = (body: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios.post(url, body, config)
      .then((response) => { setData(response.data) })
      .catch((err) => { setError(err) })
      .finally(() => { setLoading(false) })
  }

  const putMethod = (id: number, body: any) => {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }

    setLoading(true);
    axios.put(`${url}/${id}`, body, config)
      .then((response) => {setData(response.data)})
      .catch((err) => {setError(err)})
      .finally(() => {setLoading(false)})
  }
   
  const deleteMethod = (id: any) =>{
    const config ={
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    }
    setLoading(true);
    axios.delete(`${url}/${id}`, config)
      .then((response) => {setData(response.data)})
      .catch((err) => {setError(err)})
      .finally(() => {setLoading(false)})
  }

  return {data, loading, error, postMethod, putMethod, deleteMethod}

}

export default ApiMethods;