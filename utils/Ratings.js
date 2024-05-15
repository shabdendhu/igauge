//helpers
"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create a rating badge
export const createRatingBadge = async (ratingBadgeData) => {
  await initializePayload();
  const createdRatingBadge = await payload.create({
    collection: "rating-badges",
    data: ratingBadgeData,
  });
  return createdRatingBadge;
};

// Function to Read (Get) a rating badge by ID
export const getRatingBadgeById = async (id) => {
  await initializePayload();
  const ratingBadge = await payload.findOne({
    collection: "rating-badges",
    id,
  });
  return ratingBadge;
};

// Function to Update a rating badge by ID
export const updateRatingBadge = async (id, updatedData) => {
  await initializePayload();
  const updatedRatingBadge = await payload.update({
    collection: "rating-badges",
    id,
    data: updatedData,
  });
  return updatedRatingBadge;
};

// Function to Delete a rating badge by ID
export const deleteRatingBadge = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "rating-badges",
    id,
  });
};

// Function to Search for rating badges
export const searchRatingBadges = async (query) => {
  await initializePayload();
  const ratingBadges = await payload.find({
    collection: "rating-badges",
    depth: 1, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return ratingBadges;
};

// Function to Get All rating badges
export const getAllRatingBadges = async (query) => {
  const client = await getPayloadClient();
  const allRatingBadges = await client.find({
    collection: "rating-badges",
    ...query,
  });
  return allRatingBadges;
};
