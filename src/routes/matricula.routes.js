import { Router } from 'express'

const router = Router();
import * as matCtr from '../controllers/matricula.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/' ,checkToken, matCtr.readAllMatricula);
router.get("/:id" ,checkToken, matCtr.readMatricula);
router.delete("/:id" ,checkToken, matCtr.delMatricula)
router.post("/", checkToken, matCtr.createMatricula);
router.put("/:id" ,checkToken, matCtr.updateMatricula)

export default router;