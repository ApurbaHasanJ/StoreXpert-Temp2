import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDesc = ({ product }) => {
  // console.log(product);
  return (
    <section id="details" className="py-5">
      <Tabs defaultValue="product-details">
        <TabsList>
          <TabsTrigger value="product-details">Product Details</TabsTrigger>
          <TabsTrigger value="delivery-information">
            Delivery Information
          </TabsTrigger>
          <TabsTrigger value="return-and-refund-policy">
            Return & Refund Policy
          </TabsTrigger>
        </TabsList>
        <TabsContent value="product-details">
          {product?.product_details}
        </TabsContent>
        <TabsContent value="delivery-information">
          {product?.delivery_information}
        </TabsContent>
        <TabsContent value="return-and-refund-policy">
          {product?.return_refund_policy}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductDesc;