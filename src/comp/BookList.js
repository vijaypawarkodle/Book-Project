import Book from "./Book";

const BookList = () => {
  const book1 = {
    imgg: "https://m.media-amazon.com/images/I/51e0pWVPvYL._AC_UY436_FMwebp_QL65_.jpg",
    Name: " Vogue India - November - December 2023 + The Vogue Wedding Book",
    Seller: "Auth by Condé Nast (India) Private Limited | 12 November 2023",
    Rating: "4.5",
    Price: "$ 50",
  };
  const book2 = {
    imgg: "https://m.media-amazon.com/images/I/814BAk-r5HL._AC_UY436_FMwebp_QL65_.jpg",
    Name: " The Complete Novel of Sherlock Holmes",
    Seller: "by Arthur Conan Doyle ",
    Rating: "4",
    Price: "$ 10",
  };
  return (
    <>
      <Book
        pic={book1.imgg}
        Name={book1.Name}
        Seller={book1.Seller}
        Rating={book1.Rating}
        Price={book1.Price}
      />
      <Book
        pic={book2.imgg}
        Name={book2.Name}
        Seller={book2.Seller}
        Rating={book2.Rating}
        Price={book2.Price}
      />
    </>
  );
};
export default BookList;
