let allSpans = document.querySelectorAll(".control span")
let imgProduct = document.getElementById("imgProduct")

allSpans.forEach((span , index) => {
   span.addEventListener("click",function () {
      allSpans.forEach((span) => span.classList.remove("active"))
      span.classList.add("active")
      imgProduct.src = `imgs/image${index+1}.png`
   })
})
