// Checks for token to see if
// user is logged in
import { Notification } from 'rsuite'

export const checkToken = localStorage.getItem("userToken");

export function restrictedAccess(history) {
  Notification.error({
    title: "Acesso restrito",
    description: "Somente usuários logados podem acessar"
  })
  history.push("/");
}
