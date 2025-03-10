
// @/src/functions/sessionStorageHelpers/tsx

/**
 * Stores a value in sessionStorage under the specified key.
 * The value is serialized to JSON.
 *
 * @param key - The key under which to store the value.
 * @param data - The data to store.
 */
export function storeInSession<T>(key: string, data: T): void {
    try {
      const serializedData = JSON.stringify(data);
      sessionStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error storing data in session storage:", error);
    }
  }
  
  /**
   * Retrieves and parses a value from sessionStorage by its key.
   *
   * @param key - The key of the stored value.
   * @returns The parsed data, or null if not found or parsing fails.
   */
  export function fetchFromSession<T>(key: string): T | null {
    try {
      const serializedData = sessionStorage.getItem(key);
      if (serializedData === null) return null;
      return JSON.parse(serializedData) as T;
    } catch (error) {
      console.error("Error fetching data from session storage:", error);
      return null;
    }
  }
  