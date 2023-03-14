import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {colorChanged, statusChanged} from '../redux/filters/actions';

const numberOfTodos = (nos) => {
    switch (nos) {
        case 0:
            return "No Todo is ";

        case 1:
            return "1 Todo is ";
    
        default:
            return `${nos} Todos are`;
    }
}

const Footer = () => {
    const todos = useSelector( (state) => state.todo)
    const filters = useSelector( (state) => state.filter)

    const  dispatch = useDispatch()
    const todosRemaining = todos.filter( todo => !todo.completed).length
    const {status, colors} = filters;
    console.log(filters);

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status))
    }

    const handleColorChange = (color) => {
        if(colors.includes(color)){
            dispatch(colorChanged(color, 'removed'))
        }
        else{
            dispatch(colorChanged(color, 'added'))
        }
        
    }
    
    return (
        <>
            <div class="mt-4 flex justify-between text-xs text-gray-500">
                <p> {numberOfTodos(todosRemaining)} Incomplete</p>
                <ul class="flex space-x-1 items-center text-xs">
                    <li class={`cursor-pointer ${status === 'All' && 'font-bold underline text-green-600'}`} 
                        onClick={() =>handleStatusChange('All')}>All</li>
                    <li>|</li>
                    <li class={`cursor-pointer ${status === 'Incomplete' && 'font-bold underline text-green-600'}`} 
                        onClick={() =>handleStatusChange('Incomplete')}>Incomplete</li>
                    <li>|</li>
                    <li class={`cursor-pointer ${status === 'Complete' && 'font-bold underline text-green-600'}`} 
                        onClick={() =>handleStatusChange('Complete')}>Complete</li>
                    <li></li>
                    <li></li>
                    <li
                        class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}                     
                        onClick={() => handleColorChange('green')}
                    ></li>
                    <li
                        class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}  
                        onClick={() => handleColorChange('red')}
                    ></li>
                    <li
                        class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${colors.includes('yellow') && 'bg-yellow-500'}`}  
                        onClick={() => handleColorChange('yellow')}
                    ></li>
                </ul>        
            </div>
        </>
    );
};

export default Footer;