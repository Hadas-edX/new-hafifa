import { writeInfo } from '../../model';

export const writeIdea = async (idea) => {
  const response = await writeInfo(idea);
  return response;
};
