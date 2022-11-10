/**
 * modified from https://github.com/vitejs/vite/blob/main/scripts/publishCI.ts
 */
import colors from 'picocolors'
import {
  getPackageInfo,
  publishPackage,
  step,
} from './releaseUtils.js'
console.log(colors.inverse(colors.yellow(' RUN ')))
async function main() {
  const pkgNames = [
    'all',
    'basic',
    'eslint-plugin-songwuk',
    'typescript',
    'vue',
  ]
  const releaseTag = ''
  for (const pkgName of pkgNames) {
    const { currentVersion, pkgDir } = getPackageInfo(pkgName)
    step(`Publishing-${pkgName}-package-${currentVersion}`)
    await publishPackage(pkgDir, releaseTag)
  }
}
main().catch((err) => {
  console.error(err)
  process.exit(1)
})
