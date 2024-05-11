"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create an institution
export const createInstitution = async (institutionData) => {
  await initializePayload();
  const createdInstitution = await payload.create({
    collection: "institutions",
    data: institutionData,
  });
  return createdInstitution;
};

// Function to Read (Get) an institution by ID
export const getInstitutionById = async (id) => {
  await initializePayload();
  const institution = await payload.findOne({
    collection: "institutions",
    id,
  });
  return institution;
};

// Function to Update an institution by ID
export const updateInstitution = async (id, updatedData) => {
  await initializePayload();
  const updatedInstitution = await payload.update({
    collection: "institutions",
    id,
    data: updatedData,
  });
  return updatedInstitution;
};

// Function to Delete an institution by ID
export const deleteInstitution = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "institutions",
    id,
  });
};

// Function to Search for institutions
export const searchInstitutions = async (query) => {
  await initializePayload();
  const institutions = await payload.find({
    collection: "institutions",
    depth: 3, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return institutions;
};

// Function to Get All institutions
export const getAllInstitutions = async () => {
  const client = await getPayloadClient();
  const allInstitutions = await client.find({
    collection: "institutions",
    depth: 3, // Increase the depth as per your requirement
  });
  return allInstitutions;
};
// Function to Get Institution Counts by Institution Type
export const getInstitutionCountsByType = async () => {
  const client = await getPayloadClient();
  const allInstitutions = await client.find({
    collection: "institutions",
    depth: 1, // Depth 1 is sufficient to get institution_type field
  });

  // Initialize an object to store counts
  const countsByType = {};
  // console.log({ allInstitutions });
  // Iterate through all institutions and count occurrences of each type
  allInstitutions.docs.forEach((institution) => {
    const types = institution.institution_type || []; // Handle if institution_type is not set
    console.log({ types });
    types.forEach((type) => {
      if (!countsByType[type]) {
        countsByType[type] = 1;
      } else {
        countsByType[type]++;
      }
    });
  });

  return countsByType;
};
// Helper function to get institutions by institution type
export const getInstitutionsByType = async (type) => {
  // Ensure type is provided
  if (!type) {
    throw new Error("Please provide an institution type.");
  }

  // Query Payload to find institutions by type
  await initializePayload();
  const institutions = await payload.find(
    {
      collection: "institutions",
      where: {
        institution_type: {
          equals: type,
        },
      },
    } // You can pass query parameters such as filters, sorting, etc.
  );

  return institutions;
};
