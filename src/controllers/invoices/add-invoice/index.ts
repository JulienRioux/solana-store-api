import { InvoiceModel } from '../../../models/invoice';
import { ProductModel } from '../../../models/product';
import { Logger } from '../../../utils';

export const addInvoice = async ({
  signature,
  totalPrice,
  totalSaleTax,
  totalWithSaleTax,
  cartItems,
  storeId,
  customerWalletAddress,
  currency,
  network,
}: {
  signature: string;
  totalPrice: number;
  totalSaleTax: number;
  totalWithSaleTax: number;
  cartItems: any;
  storeId: string;
  customerWalletAddress: string;
  currency: string;
  network: string;
}) => {
  try {
    const doc = new InvoiceModel({
      signature,
      totalPrice,
      totalSaleTax,
      totalWithSaleTax,
      cartItems,
      storeId,
      customerWalletAddress,
      currency,
      network,
    });

    // Updating the product quantity
    cartItems.forEach(async ({ _id, qty }: { _id: string; qty: number }) => {
      await ProductModel.findByIdAndUpdate(
        { _id },
        { $inc: { totalSupply: -qty } }
      );
    });

    await doc.save();

    return doc;
  } catch (err) {
    Logger.error(err);
    return null;
  }
};
