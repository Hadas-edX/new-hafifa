import { readInfo } from '../../model';

export const readAllIdeas = async () => {
  const allIdeas = await readInfo('C:\\Users\\Asus\\Documents\\matzpen\\new-hafifa', 'ideas.json');
  return allIdeas;
};
