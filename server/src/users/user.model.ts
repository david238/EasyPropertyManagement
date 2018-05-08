export interface User {
  _id?: string; // Assigned automatically by datastore
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
