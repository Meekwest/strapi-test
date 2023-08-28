export const getBaseInfo = async () => {
    try {
      const { data } = await useFetch('http://127.0.0.1:1337/api/developers/1?populate=photo');
      
      return data._rawValue;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };