export const appConfig = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://podariadminkavsem.online"
      : "http://localhost:8010/proxy",
}

// http://194.58.121.218:3001
