import { WORK_LOCATION } from "./locations/work";
import { ABOUT_LOCATION } from "./locations/about";
import { RESUME_LOCATION } from "./locations/resume";
import { TRASH_LOCATION } from "./locations/trash";

export * from "./nav";
export * from "./blog";
export * from "./tech";
export * from "./socials";
export * from "./photos";
export * from "./config";

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export { WORK_LOCATION, ABOUT_LOCATION, RESUME_LOCATION, TRASH_LOCATION };