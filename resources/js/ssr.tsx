import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { route } from '../../vendor/tightenco/ziggy';
import { RouteName } from 'ziggy-js';
import type { Config as Ziggy } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>

    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            // 🔥 Fix TypeScript Error Here
            const ziggy = page.props.ziggy as unknown as Ziggy;

            // @ts-expect-error
            global.route<RouteName> = (name, params, absolute) =>
            
                route(name, params, absolute, {
                    ...ziggy, // Use Fixed Ziggy Here
                    location,
                });

            return <App {...props} />;
        },
    })
);
