import { useEffect, useState } from "../ultilities"
import HeaderComponent from "../components/header"
import FooterComponent from "../components/footer"
import {isEmpty} from "lodash"
// import {} from '../lodash'
const updateBook = function(id){
    const [book, setBooks] = useState({})
    useEffect(function(){
        fetch("http://localhost:3000/books/"+ id)
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
    }, []);
    
    if(isEmpty(book)){
        return /*html*/`
            <div class="flex justify-center items-center text-red-800 font-bold text-5xl py-80">
            Loading. . .
            </div>
        `
    }

    const handleUpdateBook = function(){
        const formData  = new FormData(document.querySelector("#update-form"))
        // console.log(formData.get("name"));
        // console.log(formData.get("authors"));
        const data={
            name: formData.get("name"),
            authors: formData.get("authors"),
            original_price: formData.get("price"),
            current_seller: {
                price: formData.get("current_seller.price")
            }
            
        }
        fetch("http://localhost:3000/books/"+id, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }

    return /*html*/`
    ${HeaderComponent()}
<section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
        alt="Night"
        src="${book.images?.[0]?.base_url}"
        class="absolute inset-0 h-full w-full object-cover opacity-80"
        />
    </section>

    <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
        <div class="max-w-xl lg:max-w-3xl">
        

        <form id="update-form" action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
            <label for="FirstName" class="block text-sm font-medium text-gray-700">
                Tên Sách
            </label>

            <input
                type="text"
                id="FirstName"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value="${book.name || ""}"
                name="name"
            />
            </div>

            <div class="col-span-6 sm:col-span-3">
            <label for="LastName" class="block text-sm font-medium text-gray-700">
                Tác Giả
            </label>

            <input
                type="text"
                id="LastName"
                name="authors"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value="${book.authors || ""}"
            />
            </div>

            <div class="col-span-6">
            <label for="Email" class="block text-sm font-medium text-gray-700"> Image </label>

            <img class="w-[30%]" src="${book.images?.[0]?.base_url|| ""}"/>
            </div>

            <div class="col-span-6 sm:col-span-3">
            <label for="Password" class="block text-sm font-medium text-gray-700"> Giá Gốc</label>

            <input
                type="number"
                id="Password"
                name="price"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value="${book.original_price || ""}"
            />
            </div>
            <div class="col-span-6 sm:col-span-3">
            <label for="Password" class="block text-sm font-medium text-gray-700"> Giá sale</label>

            <input
                type="number"
                id="Password"
                name="current_seller.price"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                value="${book.current_seller?.price || ""}"
            />
            </div>

            <div class="col-span-6 sm:col-span-3">
            <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                Mô tả
            </label>

            <textarea
            class="w-full rounded-lg border-gray-200 p-3 text-sm"
              rows="8"
              id=""
              name="describe"
              >
              ${book.short_description || ""}
            
            </textarea>
            </div>

            <div class="col-span-6">
            <label for="MarketingAccept" class="flex gap-4">
                <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                Xác nhận cập nhật
                </span>
            </label>
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
                id="update-btn"
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
                Sửa
            </button>
            </div>
        </form>
        </div>
    </main>
    </div>
</section>
    ${FooterComponent()}
    `
}
export default updateBook