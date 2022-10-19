import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import Holidays from 'date-holidays'

export default function CalendarCard () {
    const [calendarDate, onChangeCalendarDate] = useState(new Date());
    const [holidaysOfDate, onChangeHolidaysOfDate] = useState<any[]>([]);
    const [birthOfDate, onChangeBirthOfDate] = useState<any[]>([]);

    useEffect(() => {
        const hd = new Holidays();
        hd.init('BR', 'al');

        const day = hd.isHoliday(calendarDate);
        day ? onChangeHolidaysOfDate(day) : onChangeHolidaysOfDate([]);
        
        fetch('/data/aniversarios.json')
        .then(res => res.json()).then(res => {
            const newBirth = [];

            for (let element of res){
                if (element.dia === calendarDate.getDate() && element.mes === calendarDate.getMonth() + 1){
                    newBirth.push(element);
                }
            }

            onChangeBirthOfDate(newBirth)
        });
    }, [calendarDate])

    const holidaysCalendar = holidaysOfDate.map((hol, index) => {
        if (index === 0){
            return (
                <>
                <div className="font-sans text-base font-medium mt-4 ml-4">Feriados</div>
                <div className='font-mono text-xs font-medium set-holiday flex items-center mt-4' key={hol.name}>{hol.name}</div>
                </>
            )
        } else {
            return (
                <div className='font-mono text-xs font-medium set-holiday flex items-center mt-4' key={hol.name}>{hol.name}</div>
            )
        }
    })

    const birthCalendar = birthOfDate.map((birth, index) => {
        if (index === 0){
            return (
                <>
                <div className="font-sans text-base font-medium mt-4 ml-4">Aniversarios</div>
                <div className='font-mono text-xs font-medium set-birth flex items-center mt-4' key={birth.name}>{birth.name}</div>
                </>
            )
        } else {
            return (
                <div className='font-mono text-xs font-medium set-birth flex items-center mt-4' key={birth.name}>{birth.name}</div>
            )
        }
    })

    return (
        <>
        <div>
            <Calendar onChange={onChangeCalendarDate} value={calendarDate} locale='pt' next2AriaLabel='false' calendarType="US" className='px-4 py-4 text-xs border-none calendario' />
            <div>
                {holidaysOfDate && holidaysCalendar}
                {birthOfDate && birthCalendar}
            </div>
        </div>
        </>
    )
}