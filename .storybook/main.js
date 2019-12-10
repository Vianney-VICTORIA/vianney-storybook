module.exports = {
    stories: ['../src/components/**/*.stories.(js|ts|mdx)'],
    presets: ['@storybook/addon-docs/preset'],
    addons: [
        '@storybook/addon-storysource/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-notes/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs/register',
    ],
};
