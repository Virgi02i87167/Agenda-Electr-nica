import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";


export const  useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent} = useSelector( state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
      dispatch( onSetActiveEvent ( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent) => {
        // Idealmente procesos deberian de llegar aca desde el backend

        if( calendarEvent._id ){
          //Estamos haciendo una modificaion a la nota
        } else {
          // Creando una nueva nota
          dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
        }
    }
    // TODO: Mnadar a llamar esto desde el modal en calendarModarl. jsx

    return {
      // * Propiedades
      events,
      activeEvent,

      //  *Metodos
      setActiveEvent
    }
}

