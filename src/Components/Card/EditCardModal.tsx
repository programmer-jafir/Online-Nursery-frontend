import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { 
    Dialog,
        DialogContent,
        DialogDescription,
        DialogClose,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
 } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEditProductMutation, useGetProductsQuery } from "@/redux/api/api";
import { editProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hook";

interface ProductCardProps {
  product:any;
}

const EditCardModal: React.FC<ProductCardProps> = ({ product }) => {

  const [image, setImage]= useState('');
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [price, setPrice]= useState('');
  const [category, setCategory]= useState('');
  const [quantity, setQuantity]= useState('');
  const [rating, setRating]= useState('');

  const handleEditProduct =(product)=>{
    const dispatch = useAppDispatch()
    dispatch(editProduct(product))
  }

  // For local Server
  // const dispatch = useAppDispatch();

  // For Server 
  const [editProduct, {data, isLoading, isError, isSuccess}] = useEditProductMutation();
  const { refetch } = useGetProductsQuery(); // To refetch products
  console.log("edit:",{data,isLoading, isError,isSuccess})
  const onSubmit = async(e: FormEvent) =>{
    e.preventDefault();

    //for server
    try {
      let _id;
      await editProduct(_id, product).unwrap();
      console.log('Edit Product added successfully');
      refetch(); // Refetch the products and update the UI
    } catch (error) {
      console.error('Failed to edit product:', error);
    }
  }

    return (
      <Dialog>
      <DialogTrigger asChild> 
       <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Post Product</a>
      </DialogTrigger> 
     <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={onSubmit}>
       <DialogHeader>
         <DialogTitle>Edit Product</DialogTitle>
         <DialogDescription>
           Make changes to your profile here. Click save when you're done.
         </DialogDescription>
       </DialogHeader>
       <div className="grid gap-4 py-4">
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="image" className="text-right">
             Product Url:
           </Label>
           <Input
           onBlur={(e) => setImage(e.target.value)}
             id="image"
             type="url"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="name" className="text-right">
             Product Name:
           </Label>
           <Input
            onBlur={(e) => setName(e.target.value)}
             id="name"
             type="text"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="description" className="text-right">
             Description:
           </Label>
           <Input
            onBlur={(e) => setDescription(e.target.value)}
             id="description"
             type="text"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="price" className="text-right">
             Product Price:
           </Label>
           <Input
            onBlur={(e) => setPrice(e.target.value)}
             id="price"
             type="number"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="category" className="text-right">
             Category:
           </Label>
           <Input
            onBlur={(e) => setCategory(e.target.value)}
           type="text"
             id="category"
             className="col-span-3"
           />
         </div>
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="quantity" className="text-right">
             Quantity:
           </Label>
           <Input
            onBlur={(e) => setQuantity(e.target.value)}
             id="quantity"
             type="number"
             className="col-span-3"
           />
         </div>          
         <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="review" className="text-right">
             Review
           </Label>
           <Input
            onBlur={(e) => setRating(e.target.value)}
           type="number"
             id="review"
             className="col-span-3"
           />
         </div>
       </div>
       <div>
         <DialogClose asChild>
         <Button
         onClick={()=>
          handleEditProduct(product)
        }
         type="submit"  className="hover:bg-lime-600 bg-green-500" type="submit">Publish</Button>
         </DialogClose>
       </div>
      </form>
     </DialogContent>
   </Dialog>
    );
};

export default EditCardModal;