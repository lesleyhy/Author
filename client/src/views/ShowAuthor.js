import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  deleteOneById,
  getOneById,
} from '../services/internalApiService';

export const ShowAuthor = (props) => {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneById(id)
      .then((data) => {
        console.log(data);
        setAuthor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (author === null) {
    return null;
  }

  const handleDelete = () => {
    deleteOneById(id)
      .then((deletedAuthor) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // We can only safely use the data to render and destructure now since
  // we checked it's not null.
  const { name } = author;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{name}</h4>
      
      <div className="mt-2">
        <Link to={`/`} className="btn btn-sm btn-outline-success">Back</Link>
        <button onClick={(e) => {
            handleDelete()
          }}
          className="btn btn-sm btn-outline-danger mx-1" >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowAuthor;