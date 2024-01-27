import { useState } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const searchChange = (e) => {
    setQuery(e);
  };

  const search = (data) => {
    // check if data is array
    if (!Array.isArray(data)) {
      console.error('Invalid data format:', data);
      return [];
    }

    return data.filter((item) => {
      const lowerCaseQuery = query.toLowerCase();

      // check if query is number
      if (!isNaN(lowerCaseQuery) && item.phone.includes(lowerCaseQuery)) {
        return true;
      }

      // chck if query exists
      return (
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.email.toLowerCase().includes(lowerCaseQuery)
      );
    });
  };

  return {
    query,
    search,
    searchChange,
  };
};
