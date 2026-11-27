import { cacheLife } from "next/cache";

/** Current year, cached so the page stays static; refreshes daily. */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
