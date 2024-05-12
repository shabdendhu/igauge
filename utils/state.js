//helpers
"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create a state
export const createState = async (stateData) => {
  await initializePayload();
  const createdState = await payload.create({
    collection: "states",
    data: stateData,
  });
  return createdState;
};

// Function to Read (Get) a state by ID
export const getStateById = async (id) => {
  await initializePayload();
  const state = await payload.findOne({
    collection: "states",
    id,
  });
  return state;
};

// Function to Update a state by ID
export const updateState = async (id, updatedData) => {
  await initializePayload();
  const updatedState = await payload.update({
    collection: "states",
    id,
    data: updatedData,
  });
  return updatedState;
};

// Function to Delete a state by ID
export const deleteState = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "states",
    id,
  });
};

// Function to Search for states
export const searchStates = async (query) => {
  await initializePayload();
  const states = await payload.find({
    collection: "states",
    depth: 1, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return states;
};

// Function to Get All states
export const getAllStates = async (query) => {
  const client = await getPayloadClient();
  const allStates = await client.find({
    collection: "states",
    ...query,
  });
  return allStates;
};
