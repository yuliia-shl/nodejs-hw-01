import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const newList = [...currentContacts, ...newContacts];
  await writeContacts(newList);
};

generateContacts(5);
