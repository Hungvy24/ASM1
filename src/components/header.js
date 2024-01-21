const HeaderComponent = function () {
  // `` backticks
  return /*html */` 
    <header class="bg-[#1A94FF]">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Logo_Tiki_2023.png/1200px-Logo_Tiki_2023.png" class="w-40 "></a>
        <div class="grow flex justify-center">
            <input type="search" placeholder="Tìm sản phẩm, thương hiệu, ..." class="w-[70%] p-2">
            <button type="button" class="bg-[#0D5CB6] p-2 text-white flex font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            Tìm kiếm</button>
            </div>
            
            <div class="text-slate-50 text-sm flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <a class="hover:text-black  font-bold" href="/dangnhap">Đăng nhập</a>/<a class="hover:text-black font-bold" href="/dangky">Đăng ký</a>
            <a class="hover:text-black font-bold pl-5 flex" href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Giỏ hàng</a>
        </div>
    </div>
</header>
<nav class="bg-gray-200 h-8">

</nav>
        `
}

export default HeaderComponent;