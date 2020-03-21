import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});