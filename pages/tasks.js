const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

let initialData = [
  {id: '1',customData:{name: 'Ranger la vaisselle', desc :"makina", done: true , class:"bg-red-600 text-white"}, dates: {start:new Date(),end:new Date(year, month, 10)}},
  {id: '2',customData:{name: 'Répondre appel d\'offres',desc :"description", done: false , class: "bg-blue-500 text-white"},dates: new Date(year, month, 2)},
  {id: '3',customData:{name: 'Signer contrat',desc :"description", done: false , class: "bg-teal text-white"},dates: new Date(year, month, 4)},
  {id: '3',customData:{name: 'Aspirer le salon',desc :"description", done: false , class: "bg-warning text-white"},dates: new Date(year, month, 9)},
  {id: '5',customData:{name: 'Coding and Compiling',desc :"description", done: false,class: "bg-sucess text-white"},dates: new Date(year, month, 10)}
]

export default initialData;

