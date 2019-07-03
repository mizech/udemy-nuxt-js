import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4d8d7e44 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _7d678788 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _9e4e37f8 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _b859627c = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _b4e9fd2e = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _2f6e332e = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _dbab15a2 = () => import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */).then(m => m.default || m)
const _5ea19e73 = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _4d8d7e44,
			name: "index"
		},
		{
			path: "/posts",
			component: _7d678788,
			name: "posts"
		},
		{
			path: "/admin",
			component: _9e4e37f8,
			name: "admin"
		},
		{
			path: "/about",
			component: _b859627c,
			name: "about"
		},
		{
			path: "/admin/auth",
			component: _b4e9fd2e,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _2f6e332e,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postId",
			component: _dbab15a2,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _5ea19e73,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
