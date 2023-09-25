import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Chào mừng quý khách đến với chương trình <br /> <p className="text-red-700 font-bold">Sale off tháng 8!</p>
        </h1>
        <p className="pt-5 text-[24px] font-[Poppins] font-[400] text-[#000000ba]">
        Hãy tranh thủ mua sắm trong tháng 8 để: <br/>
        - Nhận ưu đãi đặc biệt trên các sản phẩm hot nhất hiện nay. <br/>
        - Tiết kiệm đáng kể khi mua các sản phẩm chất lượng cao. <br/>
        - Cập nhật xu hướng mới nhất trong thế giới mua sắm. <br/>
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Mua ngay
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
