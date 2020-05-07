export interface UserType {
  _id: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
  pronouns: string;
  location: {
    type: string;
    coordinates: [number];
    description: string;
  };
  role: string;
  token?: string;
}

export interface UserAuth {
  fullName?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}
