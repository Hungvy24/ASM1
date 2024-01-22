import HeaderComponent from "./header";
import FooterComponent from "./footer";
const Dangnhap = ()=>{
    return /*html */`
    ${HeaderComponent()}
    <div class="flex justify-center pt-10">
    <div class="border w-[30%] rounded-md shadow-md">
    <form class="w-full max-w-lg">
        <h1 class="text-2xl font-medium text-center pt-10">Đăng nhập</h1>
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full  px-3 mb-6 md:mb-0 pl-10">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Tên đăng nhập 
          </label>
          <input class="appearance-none block w-[95%] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Tên" required>
        </div>
      </div>
      <!-- mật khẩu -->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 pl-10">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Mật khẩu
          </label>
          <input class="appearance-none block w-[95%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" required>
        </div>
      </div>
      <div class="flex -mx-3 mb-6 justify-center">
      <a href="/"><button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-64 ">Đăng nhập</button></a>
      </div>
      <p class="text-center text-blue-500">Nếu chưa có tài khoản click => <a class="text-red-600 hover:font-bold font-medium" href="/dangky">Đăng ký</a></p>
</form>
</div>
</div>
${FooterComponent()}
    `;
}
export default Dangnhap