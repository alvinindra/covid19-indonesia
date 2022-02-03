import {useEffect, useState} from 'react'
import $axios from '../utils/api'

const CaseInIndonesia = () => {
  const [dataIndonesia, setDataIndonesia] = useState(0)

  useEffect(() => {
    setTimeout($axios.get('/countries/id').then(res => {
      setDataIndonesia(res.data)
    }).catch(error => {
      console.error(error)
    }))
  }, [dataIndonesia])

  const { todayCases, todayRecovered, todayDeaths, cases, recovered, deaths } = dataIndonesia

  return (
    <div>
      <div className='mb-8'>
        <div className='text-2xl font-bold mb-4'>Jumlah Kasus Harian :</div>
        { dataIndonesia &&
          <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5'>
              <div className='rounded-md p-3 bg-gradient-to-r from-red-600 to-rose-500 shadow-md'>
                <div className='text-lg font-medium text-white'>Terkonfirmasi :</div>
                <div className='text-md text-white'>
                  {todayCases.toLocaleString()}
                </div>
              </div>
              <div className='rounded-md p-3 bg-gradient-to-r from-green-600 to-emerald-400  shadow-md'>
                <div className='text-lg font-medium text-white'>Sembuh :</div>
                <div className='text-md text-white'>
                  {todayRecovered.toLocaleString()}
                </div>
              </div>
              <div className='rounded-md p-3 bg-gradient-to-r from-slate-700 to-slate-500 shadow-md'>
                <div className='text-lg font-medium text-white'>Meninggal :</div>
                <div className='text-md text-white'>
                  {todayDeaths.toLocaleString()}
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <div className='text-2xl font-bold mb-4'>Jumlah Total Kasus :</div>
      { dataIndonesia &&
        <>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5'>
            <div className='rounded-md p-3 bg-gradient-to-r from-red-600 to-rose-500 shadow-md'>
              <div className='text-lg font-medium text-white'>Terkonfirmasi :</div>
              <div className='text-md text-white'>
                {cases.toLocaleString()}
              </div>
            </div>
            <div className='rounded-md p-3 bg-gradient-to-r from-green-600 to-emerald-400  shadow-md'>
              <div className='text-lg font-medium text-white'>Sembuh :</div>
              <div className='text-md text-white'>
                {recovered.toLocaleString()}
              </div>
            </div>
            <div className='rounded-md p-3 bg-gradient-to-r from-slate-700 to-slate-500 shadow-md'>
              <div className='text-lg font-medium text-white'>Meninggal :</div>
              <div className='text-md text-white'>
                {deaths.toLocaleString()}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default CaseInIndonesia