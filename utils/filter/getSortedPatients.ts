import { SortValue } from "@/constants";
import { Patient } from "../..";

type GetSortedPatients = {
  patients: Patient[];
  sort: SortValue;
};

const compare = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const getSortedPatients = ({ patients, sort }: GetSortedPatients) => {
  return patients.sort((a: Patient, b: Patient) => {
    const aFullName = a.first_name + a.last_name;
    const bFullName = b.first_name + b.last_name;
    if (sort === "asc") {
      return compare(aFullName, bFullName);
    } else {
      return compare(bFullName, aFullName);
    }
  });
};
