export default function getNewId(database: Array<any>): number {
  const lastId = database.at(-1)?.id;
  return lastId ? lastId + 1 : 0;
}
