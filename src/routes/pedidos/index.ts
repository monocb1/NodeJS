import  express from 'express';

import { 
    getAllPedidos,
    getPedidosByid,
    createPedidos,
    updatePedidos,
    DeletePedidos
 } from '../../controllers/pedidos/index'
 
import { updateDateMiddleware } from '../../middleware/updateDates';

 const router = express.Router();




 router.get("/",[updateDateMiddleware,getAllPedidos]);
 router.get("/:id",[updateDateMiddleware,getPedidosByid]);
 router.post("/",[updateDateMiddleware,createPedidos]);
 router.put("/:id",[updateDateMiddleware,updatePedidos]);
 router.delete("/",[updateDateMiddleware,DeletePedidos]);


 export default router;