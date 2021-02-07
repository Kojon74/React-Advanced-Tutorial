export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "Person Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false, modalContent: "" };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Deleted person",
    };
  }
  return new Error("No matching action type");
};
