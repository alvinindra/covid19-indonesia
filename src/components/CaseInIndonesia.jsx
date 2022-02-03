import {useEffect, useState} from 'react'
import $axios from '../utils/api'
import iconPositif from '../assets/icon-positif.svg'
import iconSembuh from '../assets/icon-sembuh.svg'
import iconMeninggal from '../assets/icon-meninggal.svg'

const CaseInIndonesia = () => {
  const [dataIndonesia, setDataIndonesia] = useState('')

  useEffect(() => {
    $axios.get('/countries/id').then(res => {
      setDataIndonesia(res.data)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const { todayCases, todayRecovered, todayDeaths, cases, recovered, deaths, updated } = dataIndonesia

  function timeConverter(UNIX_timestamp){
    const dateObject = new Date(UNIX_timestamp)
    const dayName = dateObject.toLocaleString("id-ID", {weekday: 'long'})
    const day = dateObject.toLocaleString("id-ID", {day: 'numeric'})
    const month = dateObject.toLocaleString("id-ID", {month: 'long'})
    const year = dateObject.toLocaleString("id-ID", {year: 'numeric'})
    return `${dayName}, ${day} ${month} ${year}`
  }

  return (
    <div>
      <div className='mb-[50px]'>
        <div className='text-lg sm:text-2xl font-bold mb-1'>Kasus Harian :</div>
        { dataIndonesia &&
          <>
            <div className='text-sm text-[#3B3B3B] mb-3'>
              Update terkini : {timeConverter(updated)}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-5'>
              <div className='rounded p-4 bg-white text-center shadow-custom'>
                <img className='w-26px h-26px mb-3 mx-auto' src={iconPositif} alt="" />
                <div className='text-2xl text-[#8068F4] font-bold'>
                  {todayCases.toLocaleString()}
                </div>
                <div className='text-base'>Positif</div>
              </div>
              <div className='rounded p-4 bg-white text-center shadow-custom'>
                <img className='w-26px h-26px mb-3 mx-auto' src={iconSembuh} alt="" />
                <div className='text-2xl text-[#2ECC71] font-bold'>
                  {todayRecovered.toLocaleString()}
                </div>
                <div className='text-base'>Sembuh</div>
              </div>
              <div className='rounded p-4 bg-white text-center shadow-custom'>
                <img className='w-26px h-26px mb-3 mx-auto' src={iconMeninggal} alt="" />
                <div className='text-2xl text-[#FF4532] font-bold'>
                  {todayDeaths.toLocaleString()}
                </div>
                <div className='text-base'>Meninggal</div>
              </div>
            </div>
          </>
        }
      </div>
      <div className="mb-[50px]">
        <div className='text-lg sm:text-2xl font-bold mb-4'>Jumlah Kasus di Indonesia Saat Ini :</div>
        { dataIndonesia &&
          <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-5'>
                <div className='rounded p-4 bg-white text-center shadow-custom'>
                  <img className='w-26px h-26px mb-3 mx-auto' src={iconPositif} alt="" />
                  <div className='text-2xl text-[#8068F4] font-bold'>
                    {cases.toLocaleString()}
                  </div>
                  <div className='text-base'>Positif</div>
                </div>
                <div className='rounded p-4 bg-white text-center shadow-custom'>
                  <img className='w-26px h-26px mb-3 mx-auto' src={iconSembuh} alt="" />
                  <div className='text-2xl text-[#2ECC71] font-bold'>
                    {recovered.toLocaleString()}
                  </div>
                  <div className='text-base'>Sembuh</div>
                </div>
                <div className='rounded p-4 bg-white text-center shadow-custom'>
                  <img className='w-26px h-26px mb-3 mx-auto' src={iconMeninggal} alt="" />
                  <div className='text-2xl text-[#FF4532] font-bold'>
                    {deaths.toLocaleString()}
                  </div>
                  <div className='text-base'>Meninggal</div>
                </div>
              </div>
          </>
        }
      </div>
    </div>
  )
}

export default CaseInIndonesia