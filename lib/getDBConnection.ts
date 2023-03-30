import { AppDataSource } from "@/src/data-source";
import 'reflect-metadata';

const promise = (async () => {
  return AppDataSource.initialize();
})();

export async function getDatabaseConnection() {
  if (AppDataSource.isInitialized) {
    return promise;
  }
  return AppDataSource.initialize();
}