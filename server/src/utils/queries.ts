export interface IPagination {
  limit: number;
  pageIndex: number;
}
export interface IPaginatedResponse<T = any> extends IPagination {
  data: T[];
  total: number;
}
export const getPagination = (params: IPagination): any[] => {
  const skip: number = params.pageIndex * params.limit;
  return [
    {
      $facet: {
        metadata: [{ $count: 'total' }],
        data: [{ $skip: skip }, { $limit: params.limit }],
      },
    },
    {
      $project: {
        data: 1,
        // Get total from the first element of the metadata array
        total: { $arrayElemAt: ['$metadata.total', 0] },
      },
    },
  ];
};

