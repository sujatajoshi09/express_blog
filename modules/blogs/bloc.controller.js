const BlogModel = require("./bloc.model.js");

const create = (payload) => {
  return BlogModel.create(payload);
};

const getAll = () => {
  return BlogModel.find();
};

const getById = (_id) => {
  return BlogModel.findOne({ _id });
};

const updateById = (_id) => {
  return BlogModel.updateOne({ _id }, payload);
};

const deleteById = (_id) => {
  return BlogModel.deleteOne({ _id });
};

module.exports = { create, getAll, getById, updateById, deleteById };
