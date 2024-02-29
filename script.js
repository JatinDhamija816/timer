const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const heading = document.querySelector('h1')
const timer = document.querySelector('.timer')


const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour


const getTimer = () => {
    let now = new Date()
    let dd = String(now.getDate()).padStart(2, '0')
    let mm = String(now.getMonth() + 1).padStart(2, '0')
    let yyyy = now.getFullYear()
    now = `${mm}/${dd}/${yyyy}`


    const enterDay = prompt('Enter Day').padStart(2, '0')
    const enterMonth = prompt('Enter Month').padStart(2, '0')
    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`

    if (now > targetDate) {
        targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`
    }

    const interval = setInterval(() => {

        //Convert Target Date in MilliSeconds
        const timer = new Date(targetDate).getTime()
        //Convert Current Date in MilliSeconds
        const today = new Date().getTime()

        const diff = timer - today

        const leftDay = Math.floor(diff / day)
        const leftHour = Math.floor((diff % day) / hour)
        const leftMinute = Math.floor((diff % hour) / minute)
        const leftSecond = Math.floor((diff % minute) / second)

        days.innerText = leftDay
        hours.innerText = leftHour
        minutes.innerText = leftMinute
        seconds.innerText = leftSecond

        if (diff < 0) {
            timer.style.display = 'none'
            heading.innerText = `Time's Up`
            clearInterval(interval)
        }
    }, 1000)
}

getTimer()