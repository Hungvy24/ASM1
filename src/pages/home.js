import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

import data from '../../db.json' assert {type: 'json'}
import Book from '../components/book'

const HomePage = function () {
  return /*html*/ `
      ${HeaderComponent()}
      <div class="flex justify-center">
      <div class=" w-[100%] mt-10">
      <div class="flex">
      <div class="w-1/5  bg-slate-50 h-52">
      <h1 class="font-bold pl-5">DANH MỤC SẢN PHẨM</h1><br>
      <ul class="pl-10">
      <li class="hover:text-red-600 font-medium hover:font-bold"><a>English Books</a></li>
      <li class="mt-2 hover:text-red-600 font-medium hover:font-bold"><a>Sách tiếng Việt</a></li>
      <li class="mt-2 hover:text-red-600 font-medium hover:font-bold"><a>Văn phòng phẩm</a></li>
      <li class="mt-2 hover:text-red-600 font-medium hover:font-bold"><a>Quà lưu niệm</a></li>
      </ul>
      </div>
      <div class="w-4/5 pl-5">
      <h1 class="font-bold text-2xl">Nhà Sách Tiki</h1><br>
      <div>
      <img src="../img/banner.jpg" alt="">
      </div>
      <div class="pt-4 font-medium ">
      <a href="/chitietsp" class="mr-10 text-decoration-line-through hover:text-red-500 hover:font-bold">Phổ Biến</a>
      <a href="#" class="mr-10 hover:text-red-500 hover:font-bold">Bán Chạy</a>
      <a href="#" class="mr-10 hover:text-red-500 hover:font-bold">Hàng Mới</a>
      <a href="#" class="mr-10 hover:text-red-500 hover:font-bold">Giá Thấp</a>
      <a href="#" class="mr-10 hover:text-red-500 hover:font-bold">Giá Cao</a>
      </div>
      <hr>
      <div class="grid grid-cols-4 gap-4 ">
      ${data.books.map(function (book) {
        return Book(book)
      }).join("")}
      </div>
      </div>
      </div>
      
      ${FooterComponent()}
      
    `
}

export default HomePage;