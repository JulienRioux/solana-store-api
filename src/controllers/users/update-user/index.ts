import { UserModel } from '../../../models/user';

export const updateUser = async ({
  id,
  storeName,
  walletAddress,
  subDomain,
  currency,
}) => {
  const user = await UserModel.findByIdAndUpdate(
    id,
    {
      ...(storeName && { storeName }),
      ...(walletAddress && { walletAddress }),
      ...(subDomain && { subDomain }),
      ...(currency && { currency }),
      updatedAt: new Date(),
    },
    { upsert: true }
  );
  return user;
};
