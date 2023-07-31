import CommonBanner from "../common/comonBanner/ComonBanner";
import OurProduct from "../home/ourProduct/OurProduct";

function ProductInner() {
  const commonName = { title: "Our Product" };
  return (
    <>
      <CommonBanner commonName={commonName.title} />
      <OurProduct />
    </>
  );
}
export default ProductInner;
