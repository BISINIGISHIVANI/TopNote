const SortFunc = (noteData, sortByPriority, priorityType) => {
    if (sortByPriority === "LOW_TO_HIGH") {
        return noteData.sort((a, b) => priorityType[a.priorityTag] - priorityType[b.priorityTag])
    }
    if (sortByPriority === "HIGH_TO_LOW") {
        return noteData.sort((a, b) => priorityType[b.priorityTag] - priorityType[a.priorityTag])
    }
    return noteData;
}
const SortTime = (noteData, sortByTime) => {
    const data = [...noteData]
    if (sortByTime && sortByTime === "NEW_TO_OLD") {
        return data.sort((a, b) =>b.time.localeCompare(a.time))
    }
    if (sortByTime && sortByTime === "OLD_TO_NEW") {
        return data.sort((a, b) => a.date.localeCompare(b.date))
    }
    return data;
}

const SearchNote = (noteData, searchByTitle) =>
    noteData.filter((note) => note.title.toLowerCase().includes(searchByTitle.toLowerCase()))

export {
    SortFunc,
    SortTime,
    SearchNote
}