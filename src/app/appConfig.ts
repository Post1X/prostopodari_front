export const appConfig = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "http://localhost:8010/proxy"
      : "http://localhost:8010/proxy",
}
