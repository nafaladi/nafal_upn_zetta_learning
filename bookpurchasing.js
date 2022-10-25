function bookPurchasing(book, discount, tax){
    let result = 0;
    if(book && book.price){
        const price=book.price;
        const discountAmount=price*(discount/100);
        const priceAfterDiscount=price-discountAmount;
        const taxAmount=priceAfterDiscount*(tax/100);
        const priceAfterTax=priceAfterDiscount+taxAmount;

        console.group();
        console.log("Judul Buku                 :",book.title);
        console.log("Harga Buku                 : Rp",price);
        console.log("Diskon                     :",discount,"%");
        console.log("Harga Buku Setelah Diskon  : Rp",priceAfterDiscount);
        console.log("Pajak Pertambahan Nilai    :",tax,"%");
        console.log("Total Pembayaran           : Rp",priceAfterTax);
        console.groupEnd();
    }
    return 0;
}
bookPurchasing({title: "Filosofi Teras", price: 98000, status: true},20,10);