export default function badRequestError(entity: string) {
  return {
    type: 'bad_request',
    message: `Request data error: "${entity}"!`,
  };
}
