const DEVICE_ID_KEY = "packfit-device-id";

/**
 * Identyfikator urządzenia przechowywany w localStorage.
 * W MVP bez logowania pozwala filtrować "moje" podróże w Supabase.
 */
export function getDeviceId(): string {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}
