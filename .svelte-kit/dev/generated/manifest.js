const c = [
	() => import("../components/layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/training.svelte"),
	() => import("../../../src/routes/course.svelte"),
	() => import("../../../src/routes/crono.svelte"),
	() => import("../../../src/routes/blog/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/training.svelte
	[/^\/training\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/course.svelte
	[/^\/course\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/crono.svelte
	[/^\/crono\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/blog/[slug].svelte
	[/^\/blog\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];