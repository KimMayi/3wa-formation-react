import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../assets/data';

export default function DetailBlog() {
  /* 
  useParams permet d'accéder au paramétre du chemin défini dans le Routes 
  il retourne un objet (key, value) correspondant au nom du chemin dynamique
  voir App.js (<Route path=":id" element={<DetailBlog />} />)
  */
  const params = useParams();
  const navigate = useNavigate();

  const goback = () => navigate('/blogs');

  const character = data[params.id];

  if (!character) return <h1>This character doesn't exist</h1>;

  return (
    <div>
      <button onClick={goback} className="bg-indigo-500 p-2 mb-8">
        👈 GO BACK{' '}
      </button>

      <ul>
        <li>Name: {character.name} </li>
        <li>Description: {character.description} </li>
      </ul>
    </div>
  );
}
