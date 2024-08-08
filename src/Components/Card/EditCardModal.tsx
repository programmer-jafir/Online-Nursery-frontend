import { Button } from "../ui/button";
import { 
    Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
 } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
const EditCardModal = () => {
    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-yellow-500 hover:bg-orange-600 hover:text-white text-white text-base font-medium rounded p-2 px-7 my-2 ml-5" variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product Deatails</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Product Name:
            </Label>
            <Input
              id="name"
              type="text"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category:
            </Label>
            <Input
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
            type="number"
              id="review"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    );
};

export default EditCardModal;