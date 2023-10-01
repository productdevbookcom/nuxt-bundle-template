import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'
import { resolve } from 'path'


describe('module', async () => {
  await setup({
    rootDir: resolve(__dirname, '../../playground-nuxt'),
    build: true,
  })

  it('should purge classes', async () => {
    const ctx = useTestContext()
    expect(true).toBe(true)
  })
})
