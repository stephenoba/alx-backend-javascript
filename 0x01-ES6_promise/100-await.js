import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let response;
  try {
    response = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (e) {
    response = {
      photo: null,
      user: null,
    };
  }
  return response;
}
