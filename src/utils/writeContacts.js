import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Fail', error);
    throw new Error('Failed to write contact');
  }
};
