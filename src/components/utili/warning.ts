const warning = (valid: boolean, ...comment: any[]) => {
  if (
    process.env.NODE_ENV !== "production" &&
    !valid &&
    console !== undefined
  ) {
    // eslint-disable-next-line no-console
    console.warn("Warning: ", ...comment);
  }
};

export default warning;
