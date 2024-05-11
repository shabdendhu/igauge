"use server";
import { getPayloadClient } from "./getClient";

export const createRatingBadge = async (badgeData) => {
  const client = await getPayloadClient();
  await client.create({
    collection: "rating-badges",
    data: badgeData,
  });
};

export const getRatingBadgeById = async (id) => {
  const client = await getPayloadClient();
  return client.findOne({
    collection: "rating-badges",
    id,
  });
};

export const updateRatingBadge = async (id, updatedData) => {
  const client = await getPayloadClient();
  await client.update({
    collection: "rating-badges",
    id,
    data: updatedData,
  });
};

export const deleteRatingBadge = async (id) => {
  const client = await getPayloadClient();
  await client.deleteOne({
    collection: "rating-badges",
    id,
  });
};

export const searchRatingBadges = async (query) => {
  const client = await getPayloadClient();
  return client.find({
    collection: "rating-badges",
    depth: 3,
    ...query,
  });
};

export const getAllRatingBadges = async () => {
  const client = await getPayloadClient();
  return client.find({
    collection: "rating-badges",
    depth: 3,
  });
};
