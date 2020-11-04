// import Jwt from "@/common/jwt";

export default function authHeader() {
  const accessToken = '' // Jwt.getToken();

  if (accessToken) {
    return {
      Authorization: 'Bearer ' + accessToken,
    }
  } else {
    return {}
  }
}
