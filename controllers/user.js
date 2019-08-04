const UserModel = require("../modules/user");
const ffmpeg = require('fluent-ffmpeg');
class userController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        //接收客服端
        let req = ctx.request.body;
        if (req.name && req.gender && req.isWed && req.address && req.hobby) {
            try {
                //创建用户模型
                const ret = await UserModel.createUesr(req);
                //使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
                const data = await UserModel.findUesrById(ret.id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建用户成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '创建用户失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全'
            }
        }
    }
    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUesrAll(ctx) {
        try {
            // 查询文章详情模型
            let data = await UserModel.findUserAll();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
                data
            }
        }
    }
    /**
     *
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUesrById(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                let data = await UserModel.findUesrById(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '用户ID必须传'
            }
        }
    }
    /**
     * 删除指定id用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async deleteUserById(ctx) {
        let id = ctx.request.query.id;
        if (id) {
            try {
                //删除
                let data = await UserModel.destroyUserById(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '用户ID必须传'
            }
        }
    }
    /**
     * 删除指定id用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async updataUserById(ctx) {
        let req = ctx.request.body;
        if (req.id) {
            try {
                //修改
                let data = await UserModel.upertUserById(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '修改失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '用户ID必须传'
            }
        }
    }    

}
module.exports = userController;