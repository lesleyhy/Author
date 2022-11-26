import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  getOneById,
  updateOneById,
} from '../services/internalApiService';

export const EditAuthor = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getOneById(id)
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editAuthor = {
      name:name,
    };

    updateOneById(id, editAuthor)
      .then((updatedAuthor) => {
        console.log('updatedAuthor:', updatedAuthor);
        navigate(`/authors/${id}`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <form onSubmit={(e) => handleEditSubmit(e)}>
        <div className="form-group">
          <label className="h6">Name</label>
          {errors?.name && (
            <span> {errors?.name?.message}</span>
          )}
          <input onChange={(event) => {
              setName(event.target.value);
            }}
            type="text" className="form-control" value={name} />
        </div>
       
        <div className="mt-4">
					<Link to={`/`} className="btn btn-sm btn-outline-success">Cancel</Link>
          <button className="btn btn-sm btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthor;