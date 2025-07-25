const express = require("express");
const reviewRoutes = require("./review.route.js");
const bookingRoutes = require("./booking.route.js");
const paymentmethodRoutes = require("./paymentmethod.route.js");
const addressRoutes = require("./address.route.js");
const partnerRoutes = require("./partner.route.js");
const videoRoutes = require("./video.route.js");
const categoryRoutes = require("./category.route.js");
const serviceRoutes = require("./service.route.js");
const bannerRoutes = require("./banner.route.js");
const authRoutes = require("./auth.route.js");
const postRoutes = require("./post.route.js");
const userRoutes = require("./user.routes.js");

// partner dashboard
const partnerDashboardRoutes = require("@/routes/v1/partner/index.js");

const router = express.Router();

router.use("/users", userRoutes);

router.use("/posts", postRoutes);
router.use("/auths", authRoutes);

router.use("/banners", bannerRoutes);
router.use("/services", serviceRoutes);
router.use("/categories", categoryRoutes);
router.use("/videos", videoRoutes);
router.use("/partners", partnerRoutes);
router.use("/addresses", addressRoutes);
router.use("/payment-methods", paymentmethodRoutes);
router.use("/bookings", bookingRoutes);
router.use("/reviews", reviewRoutes);

// partner dashboard routes
router.use("/dashboard/partners", partnerDashboardRoutes);
module.exports = router;
