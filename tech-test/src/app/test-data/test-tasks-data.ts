export const testTasksData = [
  {
    id: 1,
    label: 'Kitchen Cleanup',
    description: 'Clean my dirty kitchen please',
    category: 'house',
    done: false
  },
  {
    id: 2,
    label: 'Taxes',
    description: 'Start doing my taxes and contact my accountant jhon for advice',
    category: 'bureaucracy',
    done: '22-10-2019'
  }
];

export const expectedStateAfterGetList = {
  entities: {
    1: {
      id: 1,
      label: 'Kitchen Cleanup',
      description: 'Clean my dirty kitchen please',
      category: 'house',
      done: false
    },
    2: {
      id: 2,
      label: 'Taxes',
      description: 'Start doing my taxes and contact my accountant jhon for advice',
      category: 'bureaucracy',
      done: '22-10-2019'
    }
  },
  ids: [1, 2],
  currentTaskId: null,
};

export const editTaskData = {
  id: 1,
  label: 'Edited field',
  description: 'Clean my dirty kitchen please',
  category: 'house',
  done: false
};

export const expectedStateAfterUpdate = {
  entities: {
    [editTaskData.id]: editTaskData,
    2: {
      id: 2,
      label: 'Taxes',
      description: 'Start doing my taxes and contact my accountant jhon for advice',
      category: 'bureaucracy',
      done: '22-10-2019'
    }
  },
  ids: [1, 2],
  currentTaskId: 1,
};
