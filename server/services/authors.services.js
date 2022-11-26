const { Author } = require('../models/author.model');

const create = async (data) => {
  console.log('service: create a Author');

  const author = await Author.create(data);
  return author;
};

const getAll = async () => {
  const authors = await Author.find();
  return authors;
};

const getOneById = async (id) => {
  const author = await Author.findById(id);
  return author;
};

const deleteOneById = async (id) => {
  const author = await Author.findByIdAndDelete(id);
  return author;
};

const updateOneById = async (id, data) => {
  const author = await Author.findByIdAndUpdate(id, data, {
    // validations
    runValidators: true,
    new: true,
  });
  return author;
};


const createMany = async (documents) => {
  const createPromises = documents.map((document) =>
    create(document)
  );
  return Promise.allSettled(createPromises);
};

module.exports = {
  create: create,
  getAll,
  getOneById,
  deleteOneById,
  updateOneById,
  createMany,
};