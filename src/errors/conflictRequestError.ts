export default function conflictRequestError(entity: string) {
  return {
    type: 'error_conflict',
    message: `Conflict on entry "${entity}"!`,
  };
}
