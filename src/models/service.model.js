const { model, Schema } = require("mongoose");

const serviceSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    partner_id: {
      type: Schema.Types.ObjectId,
      ref: "Partner",
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    total_reviews: {
      type: Number,
      default: 0,
    },
    // gallery (array URL gambar)
    gallery_images: {
      type: [String], // Array of String
      default: [], // Default kosong
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

const Service = model("Service", serviceSchema);

module.exports = { Service };
