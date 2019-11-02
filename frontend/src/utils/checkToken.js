import { Notification } from 'rsuite'

// checking if there's any sessions opened
// by cheking if there's a saved token
export const checkToken = localStorage.getItem("userToken");

// A helper function that redirects user to home
// and notifies that access is restricted to logged users
export function restrictedAccess(history) {
  Notification.error({
    title: "Acesso restrito",
    description: "Somente usuários logados podem acessar"
  })
  history.push("/");
}

export function logUser(token, name, setUserName) {
  Notification.success({
    title: "Sucesso",
    description: "Usuário logado com sucesso"
  })

  localStorage.setItem("userToken", token);
  // eslint-disable-next-line
  setUserName(name) ? console.log("Success") : console.log("Error");
  console.log("Success");
}