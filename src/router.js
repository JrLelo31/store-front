import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/accueil",
            name: "home2",
            component: () =>
                import ("./views/HomeView")
        },
        {
            path: "/supplier",
            name: "supplier",
            component: () =>
                import ("./views/AboutView")
        },
        {
            path: "/add-product",
            name: "produit",
            component: () =>
                import ("./views/AddProductView")
        },
        {
            path: "/product-list",
            name: "produits",
            component: () =>
                import ("./views/productView")
        }
    ]
});