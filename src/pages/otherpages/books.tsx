import Book1 from '../../assets/books/book1.webp';
import Book2 from '../../assets/books/book2.webp';
import Book3 from '../../assets/books/book3.jpg';

// Simulamos una lista de libros con sus datos e imágenes
const booksData = [
  {
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    year: 2015,
    image: Book1,
    link:"https://www.google.com/search?q=Calculus%3A+Early+Transcendentals+pdf&oq=Calculus%3A+Early+Transcendentals+pdf&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEIMTU5NGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
  },
  {
    title: 'Calculus and Analytic Geometry',
    author: 'George B. Thomas, Ross L. Finney',
    year: 2002,
    image: Book2,
    link: "https://www.google.com/search?q=Calculus+and+Analytic+Geometry+pdf&sca_esv=d572f8b83efcb59b&biw=1440&bih=765&sxsrf=ADLYWIJ6i7PImmDdNHbjpwXBNFnR_U_5-g%3A1722085747892&ei=c_GkZvGZNpyYwbkPzpPf2Q8&ved=0ahUKEwixn5qqpceHAxUcTDABHc7JN_sQ4dUDCBA&uact=5&oq=Calculus+and+Analytic+Geometry+pdf&gs_lp=Egxnd3Mtd2l6LXNlcnAiIkNhbGN1bHVzIGFuZCBBbmFseXRpYyBHZW9tZXRyeSBwZGYyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSJcMUABYowpwAHgAkAEAmAGOAaABkQWqAQMwLjW4AQPIAQD4AQL4AQGYAgWgAqEFwgIMECMYgAQYExgnGIoFwgIKECMYgAQYJxiKBcICCxAuGIAEGNQCGMsBwgIIEC4YgAQYywHCAgUQABiABJgDAJIHAzAuNaAHwTA&sclient=gws-wiz-serp"
  },
  {
    title: 'Calculus',
    author: 'Ron Larson, Bruce H. Edwards',
    year: 2013,
    image: Book3,
    link: "https://www.google.com/search?sca_esv=d572f8b83efcb59b&sxsrf=ADLYWIKqdA6Fy7v9G-Q-fmSxRt7f5zlwQQ:1722085744947&q=Calculus+Ron+Larson,+Bruce+H.+Edwards+pdf&source=lnms&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd7L9QFlHbGCCw2CV3tLpo-Fa7jL9jFUN-fz1eiUy5q0wDjsVt32IJIzNMiPcfzjXJ10AkD48ypkm40Ne11OjBPF7o1aeKm41t1okBwqUrEi2Panglwd3pqeek0ojuz-L7kCvSUa4cGqhQbVnc1zbm8y0pxpbM435DOShZvCJvPTPCG_3hw&sa=X&ved=2ahUKEwi-uOaopceHAxVxSzABHW39A1QQ0pQJegQIDhAB&biw=1440&bih=765&dpr=1"
  }
];

const Books = () => {
  return (
    <div className="flex justify-center items-center py-10">
      {booksData.map((book, index) => (
        <a href={book.link} className='flex justify-center items-center'>
          <div className="p-6 text-center" key={index}>
          <h2 className='font-bold text-[20px]'>{book.title}</h2>
          <img src={book.image} alt={book.title} style={{ width: '300px', height: '60vh' }} />
          <p> <span className='font-bold'>Autor:</span> {book.author}</p>
          <p> <span className='font-bold'>Año:</span> {book.year}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Books;