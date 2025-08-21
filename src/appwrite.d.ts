// declarations.d.ts
declare module "./appwrite.js" {
  export function updateSearchTerm(term: string): Promise<void>;
}
