import axiosManager from "../../../utils/axiosManager";
import { fetchData } from "./institution";
const addBookmarkInstitutionByUserId = async (userId, institution, type) => {
  try {
    const bookmarkedInstitutions = await fetchData("bookmarked-institutions", {
      filter: { user: { equals: userId } },
    });
    console.log(bookmarkedInstitutions?.docs?.length);
    if (bookmarkedInstitutions?.docs?.length) {
      //check if institution is already in bookmarks
      const institutionInBookmarks =
        bookmarkedInstitutions?.docs[0].institutions.some(
          (inst) =>
            inst.institutionId === institution && inst.institutionType === type
        );
      if (institutionInBookmarks) {
        throw new Error("Institution already bookmarked");
      }
      console.log(bookmarkedInstitutions?.docs[0]);
      const { id } = bookmarkedInstitutions?.docs[0];
      const response = await axiosManager.patch(
        `bookmarked-institutions/${id}`,
        {
          institutions: [
            ...bookmarkedInstitutions?.docs[0].institutions,
            {
              institutionId: institution,
              institutionType: type,
            },
          ],
        }
      );
      return response;
    } else {
      const response = await axiosManager.post("bookmarked-institutions", {
        user: userId,
        institutions: [
          {
            institutionId: institution,
            institutionType: type,
          },
        ],
      });
      return response;
    }
    //check if bookmarkedInstitutions.docs have
  } catch (error) {
    console.error("Error adding bookmarked institution:", error);
    throw error;
  }
};
const removeBookmarkInstitutionByUserId = async (
  userId,
  institutionId,
  institutionType
) => {
  try {
    const bookmarkedInstitutions = await fetchData("bookmarked-institutions", {
      filter: { user: { equals: userId } },
    });

    if (bookmarkedInstitutions?.docs?.length) {
      const { id, institutions } = bookmarkedInstitutions?.docs[0];
      const updatedInstitutions = institutions.filter(
        (inst) =>
          inst.institutionId !== institutionId ||
          inst.institutionType !== institutionType
      );

      if (updatedInstitutions.length === institutions.length) {
        throw new Error("Institution not found in bookmarks");
      }

      const response = await axiosManager.patch(
        `bookmarked-institutions/${id}`,
        {
          institutions: updatedInstitutions,
        }
      );
      return response;
    } else {
      throw new Error("No bookmarked institutions found for the user");
    }
  } catch (error) {
    console.error("Error removing bookmarked institution:", error);
    throw error;
  }
};
const getBookmarkedInstitutionsByUserId = async (userId) => {
  try {
    const bookmarkedInstitutions = await fetchData("bookmarked-institutions", {
      filter: { user: { equals: userId } },
    });

    if (bookmarkedInstitutions?.docs?.length) {
      return bookmarkedInstitutions?.docs[0].institutions;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching bookmarked institutions:", error);
    throw error;
  }
};
export {
  addBookmarkInstitutionByUserId,
  removeBookmarkInstitutionByUserId,
  getBookmarkedInstitutionsByUserId,
};
