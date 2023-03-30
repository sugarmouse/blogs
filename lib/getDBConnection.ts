import { AppDataSource } from "@/src/data-source";

const promise = (async () => {
  return await AppDataSource.initialize();
})();

export async function getDatabaseConnection() {
  if (AppDataSource.isInitialized) {
    return promise;
  }
  return AppDataSource.initialize();
}