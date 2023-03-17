const path = require('path')
const Creator = require('./Creator')

module.exports = async (projectName) =>{
    //命令运行时候目录
    const cwd = process.cwd()
    //目录拼接项目名
    const targetDir = path.resolve(cwd,projectName || '.')

    const creator = new Creator(projectName,targetDir)
    //调用
    console.log(`创建目的目录路径：${targetDir}`);
    await creator.create()
   
}