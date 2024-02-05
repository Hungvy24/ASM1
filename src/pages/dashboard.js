import { useEffect, useState } from "../ultilities";

const Dashboard = function () {
    const [books, setBooks] = useState([])
    // fetch
    useEffect(function () {
        fetch("http://localhost:3000/books")
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // console.log(data);
                setBooks(data)
            })
    }, []);

    useEffect(function(){
        const deleteBtn = document.querySelectorAll(".btn-delete")
        deleteBtn.forEach(function(btn){
            btn.addEventListener("click", function(){
                const result = confirm("Bạn có chắc muốn xóa hay không?")
                if(result){
                    const id = btn.dataset.id
                    handlDeleteBook(id)
                }
            })
        })
    })
    const handlDeleteBook = (id)=>{
        fetch("http://localhost:3000/books/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    return /*html*/`
        <h1 class="text-2xl font-bold text-center bg-slate-500 text-white border border-separate">Admin</h1>

        <div class="pt-10 border ">
            <table class="w-full bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right border-black border">
                <tr>
                    <th class="w-[5%] px-4 py-2 font-medium text-gray-900">STT</th>
                    <th class="w-[25%] px-4 py-2 font-medium text-gray-900">Name</th>
                    <th class="w-[30%] px-4 py-2 font-medium text-gray-900">Mô tả ngắn</th>
                    <th class="w-[10%] px-4 py-2 font-medium text-gray-900">Giá</th>
                    <th class="w-[20%] px-4 py-2 font-medium text-gray-900">Ảnh</th>
                    <th class="w-[10%] px-4 py-2"></th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 border-black border">
                ${books.map((book, index) => /*html*/`
                    <tr class="border-black border">
                        <td class="px-4 py-2 font-medium text-gray-900 border-black border">${index + 1}</td>
                        <td class="px-4 py-2 text-gray-700 border-black border">${book.name}</td>
                        <td class="px-4 py-2 text-gray-700 border-black border">${book.short_description}</td>
                        <td class="px-4 py-2 text-gray-700 border-black border">${book.list_price}</td>
                        <td class="px-4 py-2 text-gray-700 border-black border">
                            <img src="${book.images[0].base_url}"/>
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 border-black border">
                            <a
                            href="/admin/book/${book.id}"
                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                            Sửa
                            </a>
                            <button
                            data-name="${book.name}"
                            class="btn-delete inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                            >
                            Xóa
                            </button>
                            <button 
                            
                            class="inline-block rounded bg-yellow-600 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                            >
                            Thêm
                            </button>

                        </td>
                    </tr>
                `).join("")}
            </tbody>
            </table>
        </div>
    `
}

export default Dashboard