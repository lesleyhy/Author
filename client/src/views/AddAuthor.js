import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { create } from '../services/internalApiService';

export const AddAuthor = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [errors, setErrors] = useState(null);

  const handleAddAuthorSubmit = (event) => {
    event.preventDefault();

    const newAuthor = {
      name: name,
    };

    create(newAuthor)
      .then((data) => {
        console.log('new author:', data);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        //instructor:
        // `?.` allows you to safely access keys that may not exist, instead of
        // crashing the app if a key doesn't exist, it will return undefined.
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow mb-5">
			<Link to={`/`}>home</Link>
			<h3>Add a new author:</h3>
      <form onSubmit={(e) => handleAddAuthorSubmit(e)}>
        <div className="form-group">
          <label className="h6">Name</label>
          {errors?.name && (
            <span> {errors?.name?.message}</span>
          )}
          <input onChange={(event) => {
              setName(event.target.value)}}
            type="text" className="form-control"/>
        </div>

        <div className="mt-4">
					<Link to={`/`} className="btn btn-sm btn-outline-success">Cancel</Link>
          <button className="btn btn-sm btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAuthor;