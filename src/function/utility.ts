export function sum(a:number, b:number) {
    return a + b
  }

interface GroupedObjects<T> {
  [key: string]: T[];
}

export const groupObjectsByStringKey = <T>(collection: T[], iteratee: string): GroupedObjects<T> =>
  collection.reduce((acc: GroupedObjects<T>, item: T) => {
    const key: string = (item as any)[iteratee];
    if (!key) {
      return acc;
    }
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

