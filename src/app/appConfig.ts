export const appConfig = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "http://95.163.229.187:3001/"
      : "http://localhost:8010/proxy",
}
