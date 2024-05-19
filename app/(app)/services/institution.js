import axios from "axios";
import qs from "qs";

const fetchData = async (
  collectionSlug,
  { page = 1, limit = 10, filter = {}, sort = {}, depth = 0 }
) => {
  const queryString = qs.stringify({
    where: filter,
    limit: limit,
    page: page,
    depth: depth,
  });

  const response = await axios.get(
    `http://localhost:3000/api/${collectionSlug}?${queryString}`
  );
  return response.data;
};

export { fetchData };
