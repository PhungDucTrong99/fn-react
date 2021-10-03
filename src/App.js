
import './App.css';
import data from './data.json';
import BookList from './Component/card-list';
import { useState } from 'react';
import Form from './Component/form';
import CardList from './Component/book-list';

const App = () => {
  const [books, setBooks] = useState(data);

  const deleteBook = (book) => {
    const newBooks = books.filter((bookes) => bookes.book !== book);
    setBooks(newBooks);
  };
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-6 text-left p-0 border">
          <div className="title">
            <h3 className="px-2">Book List</h3>
          </div>
          <div className="px-2">
            <BookList
              data={data}  
            />
          </div>
        </div>
        <div className="col-6 text-left p-0 border">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="title">
                <h3 className="px-2">Form</h3>
              </div>
              <div className="px-2">
                <Form/>
              </div>
            </div>
            <div className="col-12 p-0 border-top">
              <div className="title">
                <h3 className="px-2">Card List</h3>
              </div>
              <div className="px-2">
                <CardList
                  data={data}  
                  deleteBook={deleteBook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
