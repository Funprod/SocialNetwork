export const updateObjectInArray = <T, K extends keyof T>(
    items: T[],
    itemId: T[K],
    objPropName: K,
    newObjProps: Partial<T>,
): T[] => {
    return items.map((u) => (u[objPropName] === itemId ? { ...u, ...newObjProps } : u));
};
