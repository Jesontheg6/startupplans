const initState = {
	projects: [
	{id: '1', title: 'help me find peach', content: 'blah blah'},
	{id: '2', title: 'help me find peach', content: 'blah blah'},
	{id: '3', title: 'help me find peach', content: 'blah blah'}
	]
} 

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};

export default projectReducer;