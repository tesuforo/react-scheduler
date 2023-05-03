import { Scheduler } from "./lib";
import { EVENTS } from "./events";
import { useRef } from "react";
import { SchedulerProps, SchedulerRef } from "./lib/types";
import es from "date-fns/locale/es";
import { WeekProps } from "./lib/views/Week";

function App() {
  const calendarRef = useRef<SchedulerRef>(null);
  const translations = {
    navigation: {
      month: "Mes",
      week: "Semana",
      day: "Día",
      today: "Fecha Actual",
    },
    form: {
      addTitle: "Agregar Evento",
      editTitle: "Editar Evento",
      confirm: "Confirmar",
      delete: "Borar",
      cancel: "Cancelar",
    },
    event: {
      title: "Titulo",
      start: "Inicio",
      end: "Final",
      allDay: "Todo el día",
    },
    moreEvents: "Más...",
    loading: "Cargando...",
  };

  const week: WeekProps = {
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    weekStartOn: 1,
    startHour: 8,
    endHour: 20,
    step: 30,
    navigation: true,
    disableGoToDay: false,
  };

  return (
    <Scheduler
      ref={calendarRef}
      translations={translations}
      locale={es}
      week={week}
      events={EVENTS}
    />
  );
}

export default App;
