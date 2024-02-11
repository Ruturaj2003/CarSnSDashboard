import { useEffect, useState } from 'react';

const TableFrame = ({ url, tableHeadings }) => {
  const [loading, setLoading] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const fetchData = async () => {
    const abortController = new AbortController();
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(url, {
        signal: abortController.signal,
      });
      setData(responseData);
    } catch (error) {
      if (!abortController.signal.aborted) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      const cleanupFunction = fetchData();

      return cleanupFunction;
    }, []); // Empty dependency array to run only on mount and unmount

    return () => {
      abortController.abort(); // Cancel the request if the component is unmounted
    };
  };

  useEffect;

  return <div>TableFrame</div>;
};
export default TableFrame;
