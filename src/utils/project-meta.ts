export type ProjectCategory = 'systems' | 'devices' | 'software';

export const PROJECT_CATEGORIES: Record<ProjectCategory, {
  label: string;
  badgeClass: string;
}> = {
  systems: {
    label: 'Комплексы',
    badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  devices: {
    label: 'Устройства',
    badgeClass: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  },
  software: {
    label: 'ПО',
    badgeClass: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  },
};

export function getProjectCategory(category: string) {
  return PROJECT_CATEGORIES[category as ProjectCategory] ?? {
    label: category,
    badgeClass: 'text-accent bg-accent/10 border-accent/20',
  };
}

/**
 * Возвращает массив мета-объектов для одной или нескольких категорий.
 * Принимает и строку (старый формат), и массив.
 */
export function getProjectCategories(category: string | string[]) {
  const list = Array.isArray(category) ? category : [category];
  return list
    .filter((c) => c && c.trim() !== '')
    .map(getProjectCategory);
}