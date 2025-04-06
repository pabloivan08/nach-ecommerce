import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {

    const abortController = new AbortController()

    setController(abortController)
    setLoading(true)

    fetch(url, { signal: abortController.signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setData(data))
      .catch(error => {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Unexpected error')
        }
      })
      .finally(() => setLoading(false))

      return () => abortController.abort()
  }, [url])

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError('Request cancelled')
    }
  }

  return { data, loading, error, handleCancelRequest }
}

export { useFetch }