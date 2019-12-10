import { storiesOf } from '@storybook/vue';
import BaseButton from './BaseButton.vue';



storiesOf('BaseButton', module)
    .add('default', () => {
        return {
            components: { BaseButton },
            template: `<base-button />`
        };
    })
