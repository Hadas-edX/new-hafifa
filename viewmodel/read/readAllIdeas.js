import { readInfo } from '../../model';

export const readAllIdeas = async () => {
  const allIdeas = await readInfo();
  return allIdeas;
};
