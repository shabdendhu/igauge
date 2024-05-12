//helpers
"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create a city
export const createCity = async (cityData) => {
  await initializePayload();
  const createdCity = await payload.create({
    collection: "cities",
    data: cityData,
  });
  return createdCity;
};

// Function to Read (Get) a city by ID
export const getCityById = async (id) => {
  await initializePayload();
  const city = await payload.findOne({
    collection: "cities",
    id,
  });
  return city;
};

// Function to Update a city by ID
export const updateCity = async (id, updatedData) => {
  await initializePayload();
  const updatedCity = await payload.update({
    collection: "cities",
    id,
    data: updatedData,
  });
  return updatedCity;
};

// Function to Delete a city by ID
export const deleteCity = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "cities",
    id,
  });
};

// Function to Search for cities
export const searchCities = async (query) => {
  await initializePayload();
  const cities = await payload.find({
    collection: "cities",
    depth: 1, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return cities;
};

// Function to Get All cities
export const getAllCities = async (query) => {
  const client = await getPayloadClient();
  const allCities = await client.find({
    collection: "cities",
    ...query,
  });
  return allCities;
};
