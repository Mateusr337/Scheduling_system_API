export default function notFoundError(entity: string) {
  return {
    type: 'error_not_found',
    message: `Could not find specified "${entity}"!`,
  };
}
