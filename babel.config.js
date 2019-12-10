module.exports = {
  presets: [[
    '@vue/cli-plugin-babel/preset', {
      useBuiltIns: false,
      /* Disabled due to clash with Storybook MDX */
      jsx: false
    }
  ]]
}
