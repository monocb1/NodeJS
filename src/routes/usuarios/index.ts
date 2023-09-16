import  express from 'express';

import { 
    getAllusuarios,
    getusuariosByid,
    createusuarios,
    updateusuarios,
    Deleteusuarios
 } from '../../controllers/usuarios/index'
 
import { updateDateMiddleware } from '../../middleware/updateDates';

 const router = express.Router();




 router.get("/",[updateDateMiddleware,getAllusuarios]);
 router.get("/:id",[updateDateMiddleware,getusuariosByid]);
 router.post("/",[updateDateMiddleware,createusuarios]);
 router.put("/:id",[updateDateMiddleware,updateusuarios]);
 router.delete("/",[updateDateMiddleware,Deleteusuarios]);


 export default router;