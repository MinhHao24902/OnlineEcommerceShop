const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Vui lòng nhập tên sản phẩm sự kiện của bạn!"],
    },
    description:{
        type: String,
        required:[true,"Vui lòng nhập mô tả sản phẩm sự kiện của bạn!"],
    },
    category:{
        type: String,
        required:[true,"Vui lòng nhập danh mục sản phẩm sự kiện của bạn!"],
    },
    start_Date: {
        type: Date,
        required: true,
      },
      Finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
    tags:{
        type: String,
    },
    originalPrice:{
        type: Number,
    },
    discountPrice:{
        type: Number,
        required: [true,"Vui lòng nhập giá sản phẩm sự kiện của bạn!"],
    },
    stock:{
        type: Number,
        required: [true,"Vui lòng nhập kho sản phẩm sự kiện của bạn!"],
    },
    images:[
        {
            public_id: {
                type: String,
                required: true,
              },
              url: {
                type: String,
                required: true,
              },
        },
    ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    sold_out:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Event", eventSchema);