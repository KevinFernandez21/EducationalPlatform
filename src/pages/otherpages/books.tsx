

// Simulamos una lista de libros con sus datos e imágenes
const booksData = [
  {
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    year: 2015,
    image: '/path/to/early-transcendentals.jpg'
  },
  {
    title: 'Calculus and Analytic Geometry',
    author: 'George B. Thomas, Ross L. Finney',
    year: 2002,
    image: '/path/to/calculus-geometry.jpg'
  },
  {
    title: 'Calculus',
    author: 'Ron Larson, Bruce H. Edwards',
    year: 2013,
    image: '/path/to/calculus-larson.jpg'
  }
];

const Books = () => {
  return (
    <div>
      {booksData.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
          <img src={book.image} alt={book.title} style={{ width: '100px', height: '150px' }} />
        </div>
      ))}
    </div>
  );
}

export default Books;