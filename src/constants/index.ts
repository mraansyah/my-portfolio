import { WORK_LOCATION } from "./locations/work";
import { ABOUT_LOCATION } from "./locations/about";
import { RESUME_LOCATION } from "./locations/resume";
import { TRASH_LOCATION } from "./locations/trash";
import { ME_GALLERY } from "./gallery/me";
import { PLACES_GALLERY } from "./gallery/places";
import { PEOPLE_GALLERY } from "./gallery/people";

export * from "./nav";
export * from "./blog";
export * from "./tech";
export * from "./socials";
export * from "./config";

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const gallery = {
  library: ME_GALLERY,
  places: PLACES_GALLERY,
  people: PEOPLE_GALLERY,
}

export { WORK_LOCATION, ABOUT_LOCATION, RESUME_LOCATION, TRASH_LOCATION };