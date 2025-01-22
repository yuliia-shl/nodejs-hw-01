import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const currentContacts = await readContacts();
  return currentContacts.length;
};

console.log(await countContacts());
