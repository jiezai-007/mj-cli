#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const  create = require('../lib/create')

//名称 描述 版本号 用法提示
program
    .name('mj-cli')
    .description('这是一个神奇的脚手架')
    .version(`mj-cli ${require('../package.json').version}`)
    .usage('<command> [options]')

program
    .command('create <app-name>')
    .description('创建项目')
    .action((name,options)=>{
        console.log(chalk.red(`MJ CLI V1.0.0`));
        create(name,options)
    })
program.on('--help',()=>{
    console.log()
    console.log(`Run ${chalk.yellow(`mj-cli <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv); //解析