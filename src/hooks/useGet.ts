import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function useGet<T>(url: string) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response: any) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, error, loading }
}

export default useGet
