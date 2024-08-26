import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant";

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["User", "Client", "Project"],
    endpoints: () => ({}),
})
export default apiSlice;