import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  deleteOneById,
  getAll,
} from '../services/internalApiService';

export const AllAuthors = (props) => {
  const [authors, setAuthors] = useState([]);

  
  /* Instructor:
  Empty arr as second arguments means it will only run on mount, not on other
  state changes so we don't keep re-fetching data.
  */
  useEffect(() => {
    getAll()
      .then((data) => {
        console.log(data);
        setAuthors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (idToDelete) => {
    deleteOneById(idToDelete)
      .then((deletedAuthor) => {
        const filteredAuthors = authors.filter((author) => {
          return author._id !== idToDelete;
          // or return author._id !== deletedAuthor
        });

        console.log('Deleted author:', deletedAuthor);
        setAuthors(filteredAuthors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <Link to={`/authors/new`}>Add an author</Link>
      <h3>We have quotes by:</h3>

      {authors.map((author) => {
        const { _id, name } = author;
        console.log(author)

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Author</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to={`/authors/${_id}`}>
                      <h4>{name}</h4>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/authors/${_id}/edit`}>Edit</Link>
                    <button onClick={(e) => {
                        handleDelete(_id);
                      }}
                      className="btn btn-sm btn-outline-danger mx-1">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default AllAuthors;