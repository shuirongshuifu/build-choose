import process from 'process'
import { execSync } from 'child_process'
import fs from 'fs'

// 假设校验只有三个单元视图
const checkArr = ['1', '2', '3']

// 获取命令行参数
let params = process.argv.at(-1) 
if (!checkArr.includes(params)) {
    throw new Error('参数不对') // process.exit(1); // 遇到错误退出
}

if (process.env.npm_lifecycle_event == 'de') {
    fs.writeFileSync('./.env.development', `VITE_UNIT = ${params}`)
    execSync(`vite --host`, { stdio: 'inherit' });
} else if (process.env.npm_lifecycle_event == 'pr') {
    fs.writeFileSync('./.env.production', `VITE_UNIT = ${params}`)
    execSync(`vite build`, { stdio: 'inherit' });
}