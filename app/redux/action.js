export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_LINK = "GET_LINK";
export const ADD_LINK = "ADD_LINK";
export const UPDATE_LINK = "UPDATE_LINK";
export const DELETE_LINK = "DELETE_LINK";

export function GetLink() {
  return {
    type: "GET_LINK",
  };
}

export function AddLink(payload) {
  return {
    type: "ADD_LINK",
    payload,
  };
}
export function UpdateLINK(payload) {
  return {
    type: "UPDATE_LINK",
    payload,
  };
}
export function DeleteLink(payload) {
  return {
    type: "DELETE_LINK",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
