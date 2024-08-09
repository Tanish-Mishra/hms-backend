const express = require("express");
const admin_router = express.Router();
const admin_contoller = require("../controller/admin");
const auth_middleware = require("../middleware/auth");
const role_check = require("../middleware/role");
admin_router.post("/hms/doctor", auth_middleware, role_check, admin_contoller.add_doctor);
admin_router.delete("/hms/doctor/:id", auth_middleware, role_check, admin_contoller.delete_doctor);
admin_router.get("/hms/appointments", auth_middleware, role_check, admin_contoller.all_appointments);
admin_router.patch("/hms/appointments", auth_middleware, role_check, admin_contoller.update_appointment);
admin_router.post("/hms/payment", auth_middleware, role_check, admin_contoller.update_appointment);
admin_router.get("/hms/userquery", auth_middleware, role_check,admin_contoller.user_query);
admin_router.get("/hms/ambulance", auth_middleware, role_check,admin_contoller.ambulance_service);

admin_router.get("/hms/single/:id",auth_middleware, role_check, admin_contoller.single_appointments);



module.exports = admin_router;