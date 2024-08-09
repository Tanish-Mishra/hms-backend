const express = require("express");
const patient_controller = require("../controller/patient");
const auth_middleware = require("../middleware/auth");
const patient_router = express.Router();
// const auth_middleware = require("../middleware/auth");
patient_router.get("/hms/patient", auth_middleware,patient_controller.all_appointments );
patient_router.post("/hms/patient/payment", auth_middleware, patient_controller.payment);
patient_router.post("/hms/patient/appointment",auth_middleware,patient_controller.create_appointments);
patient_router.post("/hms/patient/patientmessage", patient_controller.user_query);
patient_router.post("/hms/patient/ambulance",patient_controller.ambulance_booking);
patient_router.get("/hms/patient/single-appointment/:id",patient_controller.single_appointments);
patient_router.get("/hms/userdetails",auth_middleware,patient_controller.single_user);
patient_router.put("/hms/updatepatient",auth_middleware,patient_controller.update_user);

module.exports = patient_router;