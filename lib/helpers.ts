export function getFormDataString<T extends Record<string, never>>(
  formData: FormData,
  key: keyof T,
): string | null {
  const value = formData.get(key as string);
  return typeof value === 'string' ? value : null;
}

export function getFormDataFile<T extends Record<string, never>>(
  formData: FormData,
  key: keyof T,
): File | null {
  const value = formData.get(key as string);
  return value instanceof File ? value : null;
}
