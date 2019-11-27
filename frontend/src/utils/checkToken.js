import { Notification } from 'rsuite'

// checking if there's any sessions opened
// by cheking if there's a saved token
export const checkToken = localStorage.getItem("userToken");

// A helper function that redirects user to home
// and notifies that access is restricted to logged users
export function restrictedAccess(history) {
  history.push("/");
}

export function notifyAccessDenied() {
  Notification.error({
    title: "Acesso restrito",
    description: "Somente usuários logados podem acessar essa área."
  })
}

export function notifyContractExpired() {
  Notification.error({
    title: "Acesso negado",
    description: "Contrato expirado, entre em contato com a empresa."
  })
}

export function notifyUserLoggedSuccessfuly() {
  Notification.success({
    title: "Sucesso",
    description: "Usuário logado com sucesso"
  });
};

export function logUser(token, name, setUserNameAction, authenticated) {
  // eslint-disable-next-line
  authenticated ? null : notifyUserLoggedSuccessfuly();
  
  try {
    localStorage.setItem("userToken", token)
  } catch (error) {
    console.log("Erro ", error);
  }

  setUserNameAction(name);
}