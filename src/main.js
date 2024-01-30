import Contact from "./pages/contact";
import HomePage from "./pages/home"
import "../style.css"

import { render, router } from "./ultilities";
import Product from "./pages/product";
import Dangky from "./components/dangky";
import Dangnhap from "./components/dangnhap";
import Cart from "./components/card";
import Details from "./components/product_detail";
import Dashboard from "./pages/dashboard";
import Update from "./pages/update";

router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Contact)
});
router.on('/book/:id', function ({data}) {
    console.log(data.id);
    // render("#app",() => Product(data.id))
    render("#app",() => Details(data.id))
});
router.on('/dangky', function () {
    render("#app", Dangky)
});
router.on('/dangnhap', function () {
    render("#app", Dangnhap)
});
router.on('/cart', function () {
    render("#app", Cart)
});

// Admin
router.on('/admin', function () {
    render("#app", Dashboard)
});
router.on('/admin/book/:id', function({data}) {
    render("#app",()=> Update(data.id))
}) 
router.resolve();

