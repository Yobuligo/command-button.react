export const checkNotNull = <T>(value: T | undefined): NonNullable<T> => {
  if (!value) {
    throw new Error(`Variable was expected to be not null`);
  }

  return value;
};
