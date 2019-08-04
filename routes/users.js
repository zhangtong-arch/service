const router = require('koa-router')()
const UserController = require('../controllers/user');
router.prefix('/users')

router.post('/create',UserController.create);

//获取所有用户
router.get('/getUesrAll',UserController.getUesrAll)
router.get('/deleteUserById',UserController.deleteUserById)
router.post('/updataUserById',UserController.updataUserById)

module.exports = router
