const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params; //This is getting the productId from the URL

  return (
    <div className="w-full flex justify-center mt-6">
      <h1 className="font-bold text-3xl">Product {productId}</h1>
    </div>
  );
};

export default page;
