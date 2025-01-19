let initialState: SideBarTypeStore[] = [
    { id: 1, name: 'Aysel' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sofiy' },
];

export const sidebarReducer = (state: SideBarTypeStore[] = initialState, action: any) => {
    return state;
};

//types
export type SideBarTypeStore = {
    id: number;
    name: string;
};
