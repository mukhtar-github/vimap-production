import express from "express";
import {
  createVehicle,
  deleteVehicle,
  getAllVehicles,
  updateVehicle,
  showStats,
} from "../controllers/vehiclesController.js";
import testUser from "../middleware/testUser.js";

const router = express.Router();

router.route("/").post(testUser, createVehicle).get(getAllVehicles);
// place before :id
router.route("/stats").get(showStats);
router
  .route("/:id")
  .delete(testUser, deleteVehicle)
  .patch(testUser, updateVehicle);

export default router;
