<<<<<<< HEAD
import './storybook.css'
=======
>>>>>>> 61f249b0479bc50c1d78d64bfae9e50f3e38c149
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
<<<<<<< HEAD
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['README', 'REQUIREMENTS', 'DEMO','Components'],
      },
    },

=======
>>>>>>> 61f249b0479bc50c1d78d64bfae9e50f3e38c149
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

<<<<<<< HEAD
export default preview;
=======
export default preview;
>>>>>>> 61f249b0479bc50c1d78d64bfae9e50f3e38c149
