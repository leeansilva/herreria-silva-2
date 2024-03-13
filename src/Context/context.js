import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const deleteItem = () => {
    try {
      localStorage.removeItem(itemName);
      setItem(null);
    } catch (error) {
      setError(error);
    }
  };

  const updateItem = (updatedItem) => {
    try {
      const stringifiedItem = JSON.stringify(updatedItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(updatedItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    deleteItem,
    updateItem,
    loading,
    error,
  };
}

export { useLocalStorage };
