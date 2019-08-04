// 引入mysql的配置文件
const db = require('../config/db');
// 引入sequelize对象
const Sequelize = db.sequelize;
// 导入数据表模型
const Uesr = Sequelize.import('../schema/user');
//自动创建表
Uesr.sync({force: false}); 
class UesrModel {
    /**
     * 创建用户模型
     * @param {*} data 
     */
    static async createUesr(data){
        return await Uesr.create({
            name: data.name, 
            gender: data.gender,  
            isWed: data.isWed,  
            address: data.address, 
            hobby: data.hobby
        });
    }
    /**
     * 查询所有用户
     */
    static async findUserAll () {
        return await Uesr.findAll()
    }
    /**
     * 查询单个Uesr的详情
     * @param id 用户ID
     * @returns {Promise<Model>}
     */
    static async findUesrById(id){
        return await Uesr.findOne({
            where:{
                id
            }
        });
    }
    /**
     * 删除指定id用户
     */
    static async destroyUserById(id) {
        return await Uesr.destroy({
            where: {
                id
            }
        })
    }
    /**
     * 修改指定id用户
     */
    static async upertUserById(data) {
        return await Uesr.upert(data)
    }
}
module.exports = UesrModel