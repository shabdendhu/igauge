//helpers
"use server";
import config from "@/payload.config";
import payload from "payload";
import { getPayloadClient } from "./getClient";

// Initialize Payload with config
const initializePayload = async () => {
  await payload.init({ config });
};

// Function to Create a subject
export const createSubject = async (subjectData) => {
  await initializePayload();
  const createdSubject = await payload.create({
    collection: "subjects",
    data: subjectData,
  });
  return createdSubject;
};

// Function to Read (Get) a subject by ID
export const getSubjectById = async (id) => {
  await initializePayload();
  const subject = await payload.findOne({
    collection: "subjects",
    id,
  });
  return subject;
};

// Function to Update a subject by ID
export const updateSubject = async (id, updatedData) => {
  await initializePayload();
  const updatedSubject = await payload.update({
    collection: "subjects",
    id,
    data: updatedData,
  });
  return updatedSubject;
};

// Function to Delete a subject by ID
export const deleteSubject = async (id) => {
  await initializePayload();
  await payload.deleteOne({
    collection: "subjects",
    id,
  });
};

// Function to Search for subjects
export const searchSubjects = async (query) => {
  await initializePayload();
  const subjects = await payload.find({
    collection: "subjects",
    depth: 1, // Increase the depth as per your requirement
    ...query, // You can pass query parameters such as filters, sorting, etc.
  });
  return subjects;
};

// Function to Get All subjects
export const getAllSubjects = async (query) => {
  const client = await getPayloadClient();
  const allSubjects = await client.find({
    collection: "subjects",
    ...query,
  });
  return allSubjects;
};
