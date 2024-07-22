import { defineProject, mergeConfig } from 'vitest/config'

export default mergeConfig(
  {},
  defineProject({
    test: {
      globals: true,
      environment: 'jsdom',
      css: true,
      coverage: {
        reporter: ['text', 'json', 'html','lcov'],
        include: ['src/**/*'],
        setupFiles: ['./src/setupTests.ts'],
      }
    }
  })
)