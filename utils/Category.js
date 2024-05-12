//helpers
"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create a product category
export const createProductCategory = async (productCategoryData) => {
  await initializePayload();
  const createdProductCategory = await payload.create({
    collection: "product-categories",
    data: productCategoryData,
  });
  return createdProductCategory;
};

// Function to Read (Get) a product category by ID
export const getProductCategoryById = async (id) => {
  await initializePayload();
  const productCategory = await payload.findOne({
    collection: "product-categories",
    id,
  });
  return productCategory;
};

// Function to Update a product category by ID
export const updateProductCategory = async (id, updatedData) => {
  await initializePayload();
  const updatedProductCategory = await payload.update({
    collection: "product-categories",
    id,
    data: updatedData,
  });
  return updatedProductCategory;
};

// Function to Delete a product category by ID
export const deleteProductCategory = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "product-categories",
    id,
  });
};

// Function to Search for product categories
export const searchProductCategories = async (query) => {
  await initializePayload();
  const productCategories = await payload.find({
    collection: "product-categories",
    depth: 1, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return productCategories;
};

// Function to Get All product categories
export const getAllProductCategories = async (query) => {
  const client = await getPayloadClient();
  const allProductCategories = await client.find({
    collection: "product-categories",
    ...query,
  });
  return allProductCategories;
};
