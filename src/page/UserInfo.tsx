import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useCreateOrderMutation, useGetProductsQuery } from "@/redux/api/api";
import {   useAppSelector } from "@/redux/hook";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserInfo = () => {
  const products = useAppSelector((store) => store.cart.carts);
  const {selectedItems}= useAppSelector((store)=>store.cart)
  console.log(products)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostcode] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const isDisabled = selectedItems <= 0;

  const [createOrder, {isLoading:loading, isError:error}] = useCreateOrderMutation();
  const { refetch } = useGetProductsQuery()
  const navigate = useNavigate()


  const handelUser = async(e: FormEvent) => {
    e.preventDefault();
    const user = { name, phone, address, postCode, district };
    const Order ={
      user,
      products
    }
    try {
      await createOrder(Order); 
       console.log("Order created successfully");
      
    } catch (isError) {
      console.error("Error creating order", error);
    }
    await refetch();

    navigate('/order-success'),
    console.log(name, phone, address, postCode, district, address)
  };


  return (
    <div className="flex justify-center items-center min-h-screen my-10">
      <div className="w-full max-w-md bg-green-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add User Info
        </h2>
         <form onSubmit={handelUser} className="space-y-4 items-center"> {/*onSubmit={handelUser} */}
          <div>
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="img"
            >
              Full Name
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="img"
              name="img"
              required
              placeholder="Enter your full name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              id="phone"
              name="phone"
              required
              placeholder="Your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="district"
            >
              District
            </Label>
            <select
              id="district"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="Select">Select</option>
              <option value="Bagerhat">Bagerhat</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Barguna">Barguna</option>
              <option value="Barisal">Barisal</option>
              <option value="Bhola">Bhola</option>
              <option value="Bogra">Bogra</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Chandpur">Chandpur</option>
              <option value="Chapai Nawabganj">Chapai Nawabganj</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Chuadanga">Chuadanga</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Feni">Feni</option>
              <option value="Gaibandha">Gaibandha</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Gopalganj">Gopalganj</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Jashore">Jashore</option>
              <option value="Jhalokathi">Jhalokathi</option>
              <option value="Jhenaidah">Jhenaidah</option>
              <option value="Joypurhat">Joypurhat</option>
              <option value="Khagrachari">Khagrachari</option>
              <option value="Khulna">Khulna</option>
              <option value="Kishoreganj">Kishoreganj</option>
              <option value="Kurigram">Kurigram</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Lakshmipur">Lakshmipur</option>
              <option value="Lalmonirhat">Lalmonirhat</option>
              <option value="Madaripur">Madaripur</option>
              <option value="Magura">Magura</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Meherpur">Meherpur</option>
              <option value="Moulvibazar">Moulvibazar</option>
              <option value="Munshiganj">Munshiganj</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Narail">Narail</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Natore">Natore</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Nilphamari">Nilphamari</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Pabna">Pabna</option>
              <option value="Panchagarh">Panchagarh</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Pirojpur">Pirojpur</option>
              <option value="Rajbari">Rajbari</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangamati">Rangamati</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Satkhira">Satkhira</option>
              <option value="Shariatpur">Shariatpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Sirajganj">Sirajganj</option>
              <option value="Sunamganj">Sunamganj</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Tangail">Tangail</option>
              <option value="Thakurgaon">Thakurgaon</option>
            </select>
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="postcode"
            >
              Post Code
            </Label>
            <Input
              onChange={(e) => setPostcode(e.target.value)}
              value={postCode}
              type="number"
              id="postcode"
              name="postcode"
              required
              placeholder="Your post code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Address
            </Label>
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              id="description"
              name="description"
              required
              rows={4}
              placeholder="Your address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={loading  || isDisabled}
            >
              {loading ? "Placing Order Cash on Delivery..." : "Place Order Cash on Delivery"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
