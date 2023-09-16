import  express from 'express';

import { 
    getAllCategorias,
    getCategoriasByid,
    createCategoria,
    updateCategoria,
    DeleteCategoria
 } from '../../controllers/categorias/index'
 
import { updateDateMiddleware } from '../../middleware/updateDates';

 const router = express.Router();




 router.get("/",[updateDateMiddleware,getAllCategorias]);
 router.get("/:id",[updateDateMiddleware,getCategoriasByid]);
 router.post("/",[updateDateMiddleware,createCategoria]);
 router.put("/:id",[updateDateMiddleware,updateCategoria]);
 router.delete("/:id",[updateDateMiddleware,DeleteCategoria]);


 export default router;