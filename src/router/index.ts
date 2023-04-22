import HomeView from "@/views/Home/HomeView.vue";
import AuthView from "@/views/Auth/AuthView.vue";
import DashboardView from "@/views/Dashboard/DashboardView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import { watch } from "vue";
import FriendsView from "@/views/Friends/FriendsView.vue";

const { isSignedIn } = useAuth();

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                title: "Start",
                hideHeader: true,
            },
        },
        {
            path: "/auth",
            name: "auth",
            component: AuthView,
            meta: {
                title: "Logowanie",
                hideHeader: true,
            },
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardView,
            meta: {
                title: "Kokpit",
                requiresAuth: true,
            },
        },
        {
            path: "/friends",
            name: "friends",
            component: FriendsView,
            meta: {
                title: "Znajomi",
                requiresAuth: true,
            },
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuth = to.matched.some((record) => record.name == "auth");

    if (requiresAuth && !isSignedIn.value) {
        next({
            name: "auth",
        });
    }

    if (isAuth && isSignedIn.value) {
        next({
            name: "dashboard",
        });
    }

    next();
});

watch(isSignedIn, (value) => {
    if (router.currentRoute.value.meta.requiresAuth && !value) {
        router.push("/auth");
        return;
    }

    if (router.currentRoute.value.name === "auth" && value) {
        router.push("/dashboard");
        return;
    }
});

export default router;
