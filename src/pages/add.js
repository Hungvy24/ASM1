import { useState, useEffect } from "../ultilities"
import {isEmpty} from "lodash"
const addBook = ()=>{
    const postBook = function(data) {
        fetch('http://localhost:3000/books', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            alert("Thêm mới thành công")
            window.location.href = "/admin"
        })
    }

    useEffect(function() {
        const createForm = document.querySelector("#create-form")
        createForm.onsubmit = function(event) {
            event.preventDefault()
            const formData = new FormData(createForm)
            const name = formData.get('name')
            const original_price = formData.get('original-price')
            const short_description = formData.get('short-description')
            const rating_average = formData.get('rating-average')
            const current_seller = {
                price: formData.get('current-seller.price')
            }
            const newBook = {
                name, original_price, short_description, rating_average, current_seller
            }
            postBook(newBook)
        }
    }, [])
    
    return /*html*/`
<section class="bg-white">
<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
  <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
  
    <img
      alt="Pattern"
      src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </aside>

  <main
    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
  >
    <div class="max-w-xl lg:max-w-3xl">
      

      <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Thêm Sản Phẩm
      </h1>
      <form id="create-form" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="FirstName" class="block text-sm font-medium text-gray-700">
            Tên Sách:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="LastName" class="block text-sm font-medium text-gray-700">
            Tên Tác Giả:
          </label>

          <input
            type="text"
            id="authors"
            name="authors"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        
        <div class="col-span-6 sm:col-span-3">
          <label for="LastName" class="block text-sm font-medium text-gray-700">
            Giá Gốc:
          </label>

          <input
            type="number"
            id="list-price"
            name="original-price"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="LastName" class="block text-sm font-medium text-gray-700">
            Giá Sale:
          </label>

          <input
            type="number"
            id="current-seller.price"
            name="current-seller.price"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="Password" class="block text-sm font-medium text-gray-700"> Xếp hạng </label>

          <input
            type="number"
            id="rating-average"
            name="rating-average"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
            Mô tả
          </label>

          <textarea
            type="text"
            id="short-description"
            name="short-description"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
            
          </textarea>
        </div>
        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            id="add-btn"
            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Thêm mới
          </button>
        </div>
      </form>
    </div>
  </main>
</div>
</section>
    `
}
export default addBook