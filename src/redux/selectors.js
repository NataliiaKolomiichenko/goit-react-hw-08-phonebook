export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
    const items = selectContacts(state);
    const { filter } = selectFilter(state);

    if (!filter) {
        return items;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = items.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        return normalizedName.includes(normalizedFilter);
    })
    return filteredContacts;
}