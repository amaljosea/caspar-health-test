export type Patient = {
  patient_id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: "Male" | "Female";
  age: number;
  avatar: string;
};
