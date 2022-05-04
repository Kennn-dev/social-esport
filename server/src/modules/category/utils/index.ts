import mongoose from 'mongoose';

export const queryGetAllCategory = (match?: string): any[] => {
  const query: any[] = [
    {
      $lookup: {
        from: 'users',
        localField: 'followers',
        foreignField: '_id',
        as: 'followers',
      },
    },
  ];
  if (match) {
    query.push({
      $match: {
        _id: new mongoose.Types.ObjectId(match),
      },
    });
  }
  return query;
};
