import { useState, useEffect } from 'react'
import * as R from 'ramda'

function useGetTodo(model) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState(false)

  /// Loading
  const [isLoading, setIsLoading] = useState(false)
  const [refetch, setRefetch] = useState(false)

  const reloadData = () => {
    setRefetch(!refetch)
  }

  const getTodo = async q => {
    const query = R.isNil(q) ? '' : q
    setIsLoading(true)
    try {
      const resp = await model(query)
      setData(R.path(['data'], resp))
    } catch (error) {
      setStatus(R.path(['response', 'status'], error))
      setData(null)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getTodo()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, refetch])

  const result = {
    data,
    isLoading,
    setIsLoading,
    reloadData,
    status,
    setStatus
  }

  return result
}
export default useGetTodo
