import {
    useNote
} from "../hooks/context/note-context"
export const LabelReducer = (state, action) => {
    const {
        notes
    } = useNote()
    switch (action.type) {
        case "ALL":
            return {
                ...state,
                labelledArr: notes.filter((item) => item.labelTag),
            };
        case "WORK":
            return {
                ...state,
                labelledArr: notes.filter((item) => item.labelTag === "Work"),
            };
        case "CLASS_NOTES":
            return {
                ...state,
                labelledArr: notes.filter((item) => item.labelTag === "ClassNotes"),
            };
        case "ROUGH_NOTES":
            return {
                ...state,
                labelledArr: notes.filter((item) => item.labelTag === "RoughNotes"),
            }
            default:
                return state;
    }
}