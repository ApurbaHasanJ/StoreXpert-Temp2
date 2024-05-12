import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/slices/cart/cart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import emptyCartImg from "../assets/others/empty-cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaRightLong } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";

export const Stars = () => {
  return (
    <div className="flex items-center gap-2 text-yellow-500">
      {Array.from({ length: 3 }).map((_, index) => (
        <BsStarFill key={index} />
      ))}
    </div>
  );
};

const Cart = ({ deliveryCharge }) => {
  const location = useLocation();

  const carts = useSelector((state) => state?.cart?.products);
  const subTotal = useSelector((state) => state?.cart?.subTotal);
  const dispatch = useDispatch();
  // console.log(subTotal);

  // window.scrollTo({ top: 0 });

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section
      className={location?.pathname === "/cart" ? "mt-8 mb-16 container" : ""}
    >
      <div className="bg-white border-t border-ghost select-none shadow-md rounded-xl md:p-5 p-2">
        <p className="text-center bg-ghost text-secondary md:text-2xl text-xl font-semibold rounded-md p-3">
          আপনার অর্ডার
        </p>

        {/* if carts not available */}
        <div
          className={cn(
            "my-8 flex flex-col items-center",
            carts.length && "hidden"
          )}
        >
          <img className="max-w-xs w-full mx-auto" src={emptyCartImg} alt="" />
          <p className="text-xl md:text-3xl my-6">
            You have no items in your cart.
          </p>

          <Link
            to="/"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Back Home
          </Link>
        </div>

        {/* show cart in a table if available */}
        <div className={cn(!carts.length && "hidden")}>
          <div className="mt-5 border border-secondary/30 rounded-lg">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Product</TableHead>
                  <TableHead className="text-center border-x">
                    Quantity
                  </TableHead>
                  <TableHead className="text-center">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {carts?.map((cart, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium flex items-center gap-3">
                      <div>
                        <MdDeleteForever
                          onClick={() => handleRemoveFromCart(cart?._id)}
                          className="text-xl md:text-2xl text-red-600"
                        />
                      </div>
                      <img
                        className="w-20 aspect-square bg-ghost rounded-lg"
                        src={cart?.images[0]}
                        alt={"item" + i + 1}
                      />
                      <p className="max-sm:text-xs text-secondary/80 capitalize">
                        {cart?.title.length > 45
                          ? cart?.title.substring(0, 45) + "..."
                          : cart?.title}
                      </p>
                    </TableCell>
                    <TableCell className="border-x">
                      <div className="flex items-center justify-center gap-3 font-medium text-secondary">
                        {cart?.quantity > 1 ? (
                          <FaMinus
                            onClick={() => handleDecreaseQuantity(cart?._id)}
                            className="bg-secondary/40 hover:text-primary w-5 h-5 p-1 rounded"
                          />
                        ) : (
                          <FaMinus className="bg-secondary/40 hover:text-primary w-5 h-5 p-1 rounded" />
                        )}
                        {cart?.quantity}
                        <FaPlus
                          onClick={() => handleIncreaseQuantity(cart?._id)}
                          className="bg-secondary/40 hover:text-primary w-5 h-5 p-1 rounded"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-medium text-secondary">
                      Tk.{" "}
                      {cart?.disc
                        ? Math.floor(((100 - cart?.disc) / 100) * cart?.price)
                        : cart?.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* display total amount */}
          <div className="rounded-lg shadow-sm text-secondary border p-2 my-5 w-fit text-right font-medium ml-auto">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Subtotal</TableCell>
                  <TableCell className="border-l">Tk. {subTotal}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Delivery Charge (+)</TableCell>
                  <TableCell className="border-l">
                    Tk.{deliveryCharge ? deliveryCharge : 0}
                  </TableCell>
                </TableRow>
                <TableRow className="font-bold text-xl">
                  <TableCell>Total</TableCell>
                  <TableCell className="border-l">
                    Tk. {subTotal + (deliveryCharge ? deliveryCharge : 0)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div
            className={cn(
              "md:mx-auto max-md:ml-auto w-fit",
              location?.pathname === "/checkout" && "hidden"
            )}
          >
            <Link
              to={!carts?.length ? "#" : "/checkout"}
              type="button"
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-7 max-md:py-3 flex items-center gap-2"
              )}
            >
              <span>Proceed To Checkout</span> <FaRightLong />
            </Link>
          </div>

          <div className="text-center">
            <div className="mt-5 px-7 py-3 border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
              <p className="md:text-xl font-medium">
                পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ
              </p>
              <div className="flex items-center justify-center gap-2 text-3xl">
                <IoCallOutline /> <span>01710-696950</span>
              </div>
            </div>
            <div className="flex items-baseline justify-center ">
              <Stars />
              <p className="mt-3 px-2 text-secondary">
                অর্ডার কনফার্ম এর ৪৮-৭২ ঘন্টার মধ্যে ক্যাশ অন ডেলিভারি
              </p>
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
