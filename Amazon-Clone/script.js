

function getItems() {
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price

            })
        });
        console.log(items.name);
        // generateItems(items)
    });
}

getItems();

// function generateItems(items) {
//     let itemsHTML = "";
//     items.forEach(item) => {

//         itemsHTML += `
//                         <div class="main-product mr-4">
//                             <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                                 <img class="w-full h-full object-contain" src="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg" alt="">

//                             </div>
//                             <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                                 Nintendo Switch(2019)

//                             </div>
//                             <div class="product-make text-green-700 font-bold">
//                                 Nintendo

//                             </div>
//                             <div class="product-rating text-yellow-30 font-bold my-1">
//                                 ⭐⭐⭐⭐⭐ 4.5

//                             </div>
//                             <div class="product-price font-bold text-gray-700 text-lg">
//                                 $290.00

//                             </div>
//                             <div class=" hover:bg-yellow-600 addCart-button w-28 h-8 bg-yellow-500 rounded flex justify-center items-center mt-5 mb-5 cursor-pointer">
//                                 <h2 class="text-white font-bold">Add To Cart</h2>
//                             </div>
//                         </div>
//                         <div class="main-product">
//                             <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                                 <img class="w-full h-full object-contain" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000" alt="">

//                             </div>
//                             <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                                 MacBook Air pro

//                             </div>
//                             <div class="product-make text-green-700 font-bold">
//                                 Apple

//                             </div>
//                             <div class="product-rating text-yellow-30 font-bold my-1">
//                                 ⭐⭐⭐⭐⭐ 4.7

//                             </div>
//                             <div class="product-price font-bold text-gray-700 text-lg">
//                                 $1,149.00

//                             </div>
//                             <div class="hover:bg-yellow-600 addCart-button w-28 h-8 bg-yellow-500 rounded flex justify-center items-center mt-5 mb-5 cursor-pointer">
//                                 <h2 class="text-white font-bold">Add To Cart</h2>
//                             </div>
//                         </div>
//                         <div class="main-product">
//                             <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                                 <img class="w-full h-full object-contain" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" alt="">

//                             </div>
//                             <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                                 iphone 12pro

//                             </div>
//                             <div class="product-make text-green-700 font-bold">
//                                 Apple

//                             </div>
//                             <div class="product-rating text-yellow-30 font-bold my-1">
//                                 ⭐⭐⭐⭐⭐ 4.6

//                             </div>
//                             <div class="product-price font-bold text-gray-700 text-lg">
//                                 $1099.00

//                             </div>
//                             <div class="hover:bg-yellow-600 addCart-button w-28 h-8 bg-yellow-500 rounded flex justify-center items-center mt-5 mb-5 cursor-pointer">
//                                 <h2 class="text-white font-bold">Add To Cart</h2>
//                             </div>
//                         </div>
//                         <div class="main-product">
//                             <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                                 <img class="w-full h-full object-contain" src="https://www.bhphotovideo.com/images/images2500x2500/panasonic_dmc_gh5_mirrorless_micro_four_1283257.jpg" alt="">

//                             </div>
//                             <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                                 Panasonic GH5 4k

//                             </div>
//                             <div class="product-make text-green-700 font-bold">
//                                 Panasonic

//                             </div>
//                             <div class="product-rating text-yellow-30 font-bold my-1">
//                                 ⭐⭐⭐⭐⭐ 4.7

//                             </div>
//                             <div class="product-price font-bold text-gray-700 text-lg">
//                                 $1,397.00

//                             </div>
//                             <div class="hover:bg-yellow-600 addCart-button w-28 h-8 bg-yellow-500 rounded flex justify-center items-center mt-5 mb-5 cursor-pointer">
//                                 <h2 class="text-white font-bold">Add To Cart</h2>
//                             </div>
//                         </div>
        
        
//         `
//     }
    
// }

// getItems();
