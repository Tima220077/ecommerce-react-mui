export const addItem = (itemId, price, count, name) => {
  return {
    type: "ADD_ITEM",
    // payload: { itemId, price, count, name }
  };
};
// export const deleteIem = (id='1') => {
//   return {
//     type: "DELETE_ITEM",
//     payload: id
//   };
// };
// export const reset = () => {
//   return {
//     type: "RESET",
//   };
// };
