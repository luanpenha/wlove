import { differenceInYears, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'

function TextDate() {
  const startDate = new Date('2024-02-18T00:00:00') // coloque aqui a sua data de início
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()

      const years = differenceInYears(now, startDate)

      // calcula uma nova data para calcular dias restantes
      const startPlusYears = new Date(startDate)
      startPlusYears.setFullYear(startDate.getFullYear() + years)

      const days = differenceInDays(now, startPlusYears)

      const startPlusDays = new Date(startPlusYears)
      startPlusDays.setDate(startPlusYears.getDate() + days)

      const hours = differenceInHours(now, startPlusDays)
      const startPlusHours = new Date(startPlusDays)
      startPlusHours.setHours(startPlusDays.getHours() + hours)

      const minutes = differenceInMinutes(now, startPlusHours)
      const startPlusMinutes = new Date(startPlusHours)
      startPlusMinutes.setMinutes(startPlusHours.getMinutes() + minutes)

      const seconds = differenceInSeconds(now, startPlusMinutes)

      setTimeTogether({ years, days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  return (
    <footer style={{ textAlign: 'center', fontSize: '1.2rem'}}>
      {timeTogether.years} ano(s), {timeTogether.days} dia(s), {timeTogether.hours} hora(s), {timeTogether.minutes} minuto(s) e {timeTogether.seconds} segundo(s). 💖
    </footer>
  )
}

export default TextDate;
