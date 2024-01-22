import Contact from "./pages/contact";
import HomePage from "./pages/home"
import "../style.css"

import { render, router } from "./ultilities";
import Product from "./pages/product";
import Dangky from "./components/dangky";
import Dangnhap from "./components/dangnhap";
import Cart from "./components/card";

router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Contact)
});
router.on('/product', function () {
    render("#app", Product)
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

router.resolve();

