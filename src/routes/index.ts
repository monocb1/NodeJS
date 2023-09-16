import express from 'express';
//importamos todas las rutas de cada controlador 
import categoriaroutes from './categorias' 
import clientesroutes from './clientes' 
import pedidosroutes from './pedidos' 
import productosroutes from './productos' 
import usuariosroutes from './usuarios' 

const router = express.Router();


//endpoints

router.use("/categorias", categoriaroutes); // /api/categorias
router.use("/clientes", clientesroutes); // /api/clientes
router.use("/pedidos", pedidosroutes); // /api/pedidos
router.use("/productos", productosroutes); // /api/productos
router.use("/usuarios", usuariosroutes); // /api/usuarios

export default router;



