import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrganization } from "../interfaces/organization.interface";

export const organizationApi = createApi({
  reducerPath: "organization",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  tagTypes: ["Organization"],
  endpoints: (builder) => ({
    getOrganization: builder.query<IOrganization[], void>({
      query: () => `organization`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ id }) => ({ type: "Organization", id } as const)
              ),
              { type: "Organization", id: "LIST" },
            ]
          : [{ type: "Organization", id: "LIST" }],
    }),
    getOrganizationDetail: builder.query<IOrganization, { id?: string }>({
      query: ({ id }) => `organization/${id}`,
    }),
    addOrganization: builder.mutation<IOrganization, Partial<IOrganization>>({
      query: (body: IOrganization) => ({
        url: `organization`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Organization"],
    }),
    updateOrganization: builder.mutation<IOrganization, Partial<IOrganization>>(
      {
        query: (body: IOrganization) => ({
          url: `organization/${body.id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["Organization"],
      }
    ),
    deleteOrganization: builder.mutation<
      { id: number },
      Partial<{ id: number }>
    >({
      query: (body: { id: number }) => ({
        url: `organization/${body.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Organization"],
    }),
  }),
});

export const {
  useGetOrganizationQuery,
  useGetOrganizationDetailQuery,
  useAddOrganizationMutation,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = organizationApi;
