const config = {
  stories: [
    '../atoms/**/*.stories.tsx',
    '../molecules/**/*.stories.tsx',
    '../organisms/**/*.stories.tsx',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
}
export default config
