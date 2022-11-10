/**
 * modified from https://github.com/vitejs/vite/blob/main/scripts/releaseUtils.ts
 */
import path from 'node:path'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'url'
import { execa } from 'execa'
import colors from 'picocolors'
export const __filename = fileURLToPath(import.meta.url)
export function step(msg) {
  return console.log(colors.cyan(msg))
}
export function getPackageInfo(pkgName) {
  const __dirname = path.dirname(__filename)
  const pkgDir = path.resolve(__dirname, `../packages/${pkgName}`)
  if (!existsSync(pkgDir))
    throw new Error(`Package ${pkgName} not found`)
  const pkgPath = path.resolve(pkgDir, 'package.json')
  const pkg = JSON.parse(readFileSync(pkgPath, {
    encoding: 'utf-8',
  }))
  const currentVersion = pkg.version
  if (pkg.private)
    throw new Error(`Package ${pkgName} is private`)
  // const pkga = path.join(__dirname, '..', `/packages/${pkgName}`)
  return {
    pkg,
    pkgName,
    pkgDir,
    pkgPath,
    currentVersion,
  }
}

export async function run(
  bin,
  args,
  opts = {},
) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

export const runIfNotDry = run
export async function publishPackage(
  pkdDir,
  tag,
) {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const publicArgs = ['publish', '--access', 'public']
  if (tag)
    publicArgs.push('--tag', tag)
  await runIfNotDry('pnpm', publicArgs, {
    cwd: pkdDir,
  })
}
