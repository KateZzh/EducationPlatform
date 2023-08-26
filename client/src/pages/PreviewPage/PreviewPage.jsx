import Header from "../../components/Header/Header";
import PreviewInfo from "../../components/PreviewInfo/PreviewInfo";
import Footer from "../../components/Footer/Footer";

function PreviewPage() {
  return (
    <div>
      <Header isAuth={false} />
      <PreviewInfo />
      <Footer />
    </div>
  );
}

export default PreviewPage;
