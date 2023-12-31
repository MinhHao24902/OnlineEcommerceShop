import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
  className="w-full h-[100px] flex items-center p-4 cursor-pointer overflow-hidden rounded-lg border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
  key={i.id}
  onClick={() => handleSubmit(i)}
>
  <img
    src={i.image_Url}
    className="w-16 h-16 object-cover rounded-full"
    alt=""
  />
  <div className="flex flex-col ml-4">
    <h5 className="text-lg font-semibold text-gray-800">{i.title}</h5>
    <p className="text-sm text-gray-500">{i.description}</p>
    <div className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-lg text-sm w-[fit-content] cursor-pointer hover:bg-blue-600">
      Xem
    </div>
  </div>
</div>

              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
