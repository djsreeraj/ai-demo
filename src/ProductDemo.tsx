import Content from "./components/Content/Content";
import Header from "./components/header/Header";
import TitleSection from "./components/TitleSection/Title";

const ProductDemo = () => {
  return (
    <div style={{ padding: "10px 20px 50px 20px" }}>
      <Header />
      <TitleSection />
      <Content />
    </div>
  );
};

export default ProductDemo;
