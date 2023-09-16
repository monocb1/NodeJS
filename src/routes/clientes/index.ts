import  express from 'express';

import { 
    getAllClientes,
    getClientesByid,
    createClientes,
    updateClientes,
    DeleteClientes
 } from '../../controllers/clientes/index'
 
import { updateDateMiddleware } from '../../middleware/updateDates';

 const router = express.Router();




 router.get("/",[updateDateMiddleware,getAllClientes]);
 router.get("/:id",[updateDateMiddleware,getClientesByid]);
 router.post("/",[updateDateMiddleware,createClientes]);
 router.put("/:id",[updateDateMiddleware,updateClientes]);
 router.delete("/",[updateDateMiddleware,DeleteClientes]);


 export default router;