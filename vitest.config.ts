import { defineProject, mergeConfig } from 'vitest/config'

export default mergeConfig(
  {},
  defineProject({
    test: {
      globals: true,
      environment: 'jsdom',
      css: true,
      setupFiles: ['./src/setupTests.ts'],
      coverage: {
        reporter: ['text', 'json', 'html','lcov'],
        include: ['src/**/*'],
      }
    }
  })
)