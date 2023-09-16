import  express from 'express';

import { 
    getAllProductos,
    getProductosByid,
    createProductos,
    updateProductos,
    DeleteProductos
 } from '../../controllers/productos/index'
 
import { updateDateMiddleware } from '../../middleware/updateDates';

 const router = express.Router();

 router.get("/",[updateDateMiddleware,getAllProductos]);
 router.get("/:id",[updateDateMiddleware,getProductosByid]);
 router.post("/",[updateDateMiddleware,createProductos]);
 router.put("/:id",[updateDateMiddleware,updateProductos]);
 router.delete("/:id",[updateDateMiddleware,DeleteProductos]);


 export default router;