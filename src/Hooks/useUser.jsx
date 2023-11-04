import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (pageConut, perPage) => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["usersNmae", pageConut, perPage],
    queryFn: () =>
      axios(
        `http://localhost:5000/api/v1/users?page=${pageConut}&size=${perPage}`
      ).then((res) => res.data),
  });
  return { isLoading, data, refetch };
};

export default useUser;
