import { useState } from 'react';
import TaskItem from './components/TasksItem';
// import favico from '../public/favicon.io'
import logo from './assets/images/logo.png'; 
import { useEffect } from 'react';



function App() {

  // 1er sera la valeur de votre state
  // 2e sera la fonction qui permet de mettre à jour le state
  // TOUJOURS  Le déclarer au top de la fonction
const [state, setState] = useState(""); 

const [tasks, setTasks] = useState ([]);

useEffect ( ()  =>  {

  const tasksList = JSON.parse(localStorage.getItem('my-tasks'));
  if (tasksList) {
    setTasks(tasksList);
  }
  // console.log('effect');
  // setTasks (['Bonjour']);
} , []  );
// console.log('app running'); remplacer 'app running' et mettre 'tasks'
console.log(tasks);

// const [textEntered, setTextEntered] = useState("")************

const onChangeHandler = function (event) {
  // event.target => document.querySelector('input')
  // `event.target.value` permet de récuperer la valeur d'un input
  //Il fonctionne qu'avec les balises formulaire (input)
  // event.target.classList.add('red')//ajoute la class '
// event.target.classList.add('red')

// console.log (event.target.value);

setState(event.target.value);
//SetTextEntered (event.target.value);

};

const addTaskHandler = function (event) {
  // A ajouter pour TOUT formulaire utilisant une balise 'formulaire'
  // Elle permet de ne pas recharger la page submit
  event.preventDefault();

  // NE PAS UTILISER AINSI QUAND ON VEUT METTRE A JOUR UNE LISTE 
  // tasks.push(state);

  // LA BONNE METHODE : UTILISE LE `SPREAD OPERATOR` qui permet de copier 
  // une liste (tableau) puis ajouter le nouvelle tache

  // setTasks([...tasks, state])

  const newArr = [...tasks, state];
  setTasks(newArr);

  // stock les taches dans le local storage
  localStorage.setItem('my-tasks', JSON.stringify(newArr));

};

console.log(tasks);

  return (
    <main className="bg-slate-900 min-h-screen pt-5 px-10">
      // <h1 className= "text-slate-50 text-3xl front-bold text-center mb-10">TODO APP</h1>

      // {/* 
    
    // {Input pour taper une tache} */
  }

      <img src= {logo} alt="image" className="block mx auto"/>

      <form 
      onSubmit= {addTaskHandler} 
       className="flex justify-center items-center gap-4">
        <input 
        // A chaque saisi sur le input la fonction est réexcuter
        // Avec la paramètres 'event' on peut accéder à l'élément 'input'
        // Donc à sa valeur 'even.target.value'
        onChange= {onChangeHandler}
        type="text"
        className= "w-full"
        />
        <input
        type="submit" 
        value="Add Task" 
        className="text-red-400 text-2xl" 
        />
        </form>

        <section className = "mt-10 md/w-2/3 mx-auto" >
          <ul className="flex flex-col space-y-5" >
          {/* 
            la méthode `map`va parcourir la liste (tableau) et retourner (afficher) les éléments de la lsite (tableau) dans le DOM
            elle attend une focntion en `callback` la fonction recevra chaque élément du tableau via les paramétres
            donc dans notre exemple `item` représente chaque élément de la liste `tasks`
          */}
          {tasks.map((item, index) => (

          /* LA PROPRIETE `KEY` EST UTILISEE POUR IDENTIFIER CHAQUE ELEMENT GENERER PAR LA METHODE `MAP` */



          <li key= {index}  className="bg-slate-100 text-center py-4 rounded shadow-lg shadow-yellow-400" >

            <TaskItem key= {index} name={item}></TaskItem>
          
          </li>  ))}

          </ul>

        </section>
    </main>
  );
}

export default App;


/* 
Créer un composant nommé `TaskItem` qui représente le UI de qhaque `item`
de la lsite `tasks`
*/